import { getPayValue, getRandomSymbol, getRandomMultiplier, SCATTER } from './FruitSymbols';

const GRID_ROWS = 7;
const GRID_COLS = 7;

// Find all clusters using flood-fill (horizontal and vertical only)
export function findClusters(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const clusters = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (visited[r][c] || !grid[r][c] || grid[r][c].id === 'scatter') continue;

      const cluster = [];
      const symbolId = grid[r][c].id;
      const stack = [[r, c]];

      while (stack.length > 0) {
        const [cr, cc] = stack.pop();
        if (cr < 0 || cr >= rows || cc < 0 || cc >= cols) continue;
        if (visited[cr][cc]) continue;
        if (!grid[cr][cc] || grid[cr][cc].id !== symbolId) continue;

        visited[cr][cc] = true;
        cluster.push([cr, cc]);

        // Only horizontal and vertical neighbors (no diagonal)
        stack.push([cr - 1, cc], [cr + 1, cc], [cr, cc - 1], [cr, cc + 1]);
      }

      if (cluster.length >= 8) {
        clusters.push({
          symbolId,
          symbol: grid[r][c],
          positions: cluster,
          size: cluster.length,
          payout: getPayValue(grid[r][c], cluster.length),
        });
      }
    }
  }

  return clusters;
}

// Count scatter symbols
export function countScatters(grid) {
  let count = 0;
  const positions = [];
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c]?.id === 'scatter') {
        count++;
        positions.push([r, c]);
      }
    }
  }
  return { count, positions };
}

// Place random multiplier symbols on grid (0-4 multipliers)
export function placeMultipliers(grid) {
  const multipliers = [];
  const count = Math.random() < 0.4 ? 0 : Math.random() < 0.5 ? 1 : Math.random() < 0.8 ? 2 : Math.random() < 0.95 ? 3 : 4;

  const usedPositions = new Set();
  for (let i = 0; i < count; i++) {
    let r, c, key;
    do {
      r = Math.floor(Math.random() * GRID_ROWS);
      c = Math.floor(Math.random() * GRID_COLS);
      key = `${r}-${c}`;
    } while (usedPositions.has(key));
    usedPositions.add(key);
    multipliers.push({ row: r, col: c, value: getRandomMultiplier() });
  }

  return multipliers;
}

// Remove winning symbols and apply tumble (gravity) for 7x7 grid
export function tumbleGrid(grid, clusters) {
  const newGrid = grid.map(row => row.map(cell => ({ ...cell })));

  // Mark winning positions as null
  for (const cluster of clusters) {
    for (const [r, c] of cluster.positions) {
      newGrid[r][c] = null;
    }
  }

  // Apply gravity - move symbols down column by column
  for (let c = 0; c < GRID_COLS; c++) {
    const column = [];
    for (let r = GRID_ROWS - 1; r >= 0; r--) {
      if (newGrid[r][c]) {
        column.push(newGrid[r][c]);
      }
    }
    // Fill remaining with new symbols
    while (column.length < GRID_ROWS) {
      const newSym = getRandomSymbol(true);
      column.push({ ...newSym, key: `new-${c}-${column.length}-${Date.now()}-${Math.random()}`, isNew: true });
    }
    // Place back (bottom to top)
    for (let r = GRID_ROWS - 1; r >= 0; r--) {
      newGrid[r][c] = column[GRID_ROWS - 1 - r];
    }
  }

  return newGrid;
}

// Calculate total win for a spin step
export function calculateWin(clusters, bet, multipliers = [], isFreeSpin = false) {
  let baseWin = 0;
  for (const cluster of clusters) {
    baseWin += cluster.payout * bet;
  }

  if (multipliers.length > 0 && baseWin > 0) {
    const totalMultiplier = multipliers.reduce((sum, m) => sum + m.value, 0);
    return { baseWin, multiplier: totalMultiplier, totalWin: baseWin * totalMultiplier };
  }

  return { baseWin, multiplier: 1, totalWin: baseWin };
}

// Get free spin count from scatter count
export function getFreeSpinCount(scatterCount) {
  if (scatterCount >= 5) return 15;
  if (scatterCount >= 4) return 12;
  if (scatterCount >= 3) return 8;
  return 0;
}

// Full spin sequence (returns steps for animation)
export function executeSpin(initialGrid, bet, isFreeSpin = false) {
  const steps = [];
  let currentGrid = initialGrid;
  let totalWin = 0;
  let accumulatedMultipliers = []; // For free spin mode - multipliers persist

  // Check for scatters on initial grid
  const scatters = countScatters(currentGrid);

  let iteration = 0;
  const maxIterations = 20; // safety limit

  while (iteration < maxIterations) {
    const clusters = findClusters(currentGrid);
    if (clusters.length === 0) break;

    // Place multiplier symbols on grid
    const newMultipliers = placeMultipliers(currentGrid);

    // In free spin mode, multipliers accumulate and don't reset
    if (isFreeSpin) {
      accumulatedMultipliers = [...accumulatedMultipliers, ...newMultipliers];
    }

    // Use accumulated multipliers in free spin, or just current ones in base game
    const activeMultipliers = isFreeSpin ? accumulatedMultipliers : newMultipliers;

    // Calculate win
    const win = calculateWin(clusters, bet, activeMultipliers, isFreeSpin);
    totalWin += win.totalWin;

    steps.push({
      grid: currentGrid.map(row => [...row]),
      clusters,
      multipliers: activeMultipliers,
      win,
      type: 'cluster',
    });

    // Tumble
    currentGrid = tumbleGrid(currentGrid, clusters);

    steps.push({
      grid: currentGrid.map(row => [...row]),
      clusters: [],
      multipliers: isFreeSpin ? accumulatedMultipliers : [],
      win: { baseWin: 0, multiplier: 1, totalWin: 0 },
      type: 'tumble',
    });

    iteration++;
  }

  const freeSpinCount = getFreeSpinCount(scatters.count);

  return {
    steps,
    finalGrid: currentGrid,
    totalWin,
    scatters,
    triggeredFreeSpin: freeSpinCount > 0,
    freeSpinCount,
  };
}
