// Fruit Party symbol definitions
// 7x7 Grid - Cluster Pays - Fruit themed

export const SYMBOLS = [
  // Low value symbols
  { id: 'cherry', emoji: '🍒', name: 'Kiraz', tier: 'low', weight: 18, pay8: 0.5, pay12: 1.5, pay16: 6 },
  { id: 'peach', emoji: '🍑', name: 'Şeftali', tier: 'low', weight: 17, pay8: 0.8, pay12: 2, pay16: 8 },
  { id: 'apple', emoji: '🍏', name: 'Elma', tier: 'low', weight: 16, pay8: 1, pay12: 3, pay16: 10 },

  // Medium value symbols
  { id: 'watermelon', emoji: '🍉', name: 'Karpuz', tier: 'medium', weight: 14, pay8: 1.5, pay12: 4, pay16: 15 },
  { id: 'orange', emoji: '🍊', name: 'Portakal', tier: 'medium', weight: 13, pay8: 2, pay12: 5, pay16: 20 },

  // High value symbols
  { id: 'lemon', emoji: '🍋', name: 'Limon', tier: 'high', weight: 10, pay8: 3, pay12: 8, pay16: 30 },
  { id: 'grape', emoji: '🍇', name: 'Üzüm', tier: 'high', weight: 8, pay8: 4, pay12: 10, pay16: 40 },
  { id: 'strawberry', emoji: '🍓', name: 'Çilek', tier: 'high', weight: 6, pay8: 5, pay12: 12, pay16: 50 },
];

export const SCATTER = { id: 'scatter', emoji: '⭐', name: 'Scatter', weight: 2 };

export const MULTIPLIER_VALUES = [2, 4, 8, 16];

export const MULTIPLIER_EMOJI = '✨';

// Weighted random symbol picker
export function getRandomSymbol(includeScatter = true, scatterBoost = 1) {
  const scatterWeight = SCATTER.weight * scatterBoost;
  const allSymbols = includeScatter ? [...SYMBOLS, { ...SCATTER, weight: scatterWeight }] : SYMBOLS;
  const totalWeight = allSymbols.reduce((sum, s) => sum + s.weight, 0);
  let rand = Math.random() * totalWeight;

  for (const symbol of allSymbols) {
    rand -= symbol.weight;
    if (rand <= 0) return symbol;
  }
  return allSymbols[allSymbols.length - 1];
}

// Generate a 7x7 grid
export function generateGrid(scatterBoost = 1) {
  const grid = [];
  for (let row = 0; row < 7; row++) {
    const rowArr = [];
    for (let col = 0; col < 7; col++) {
      rowArr.push({ ...getRandomSymbol(true, scatterBoost), key: `${row}-${col}-${Date.now()}-${Math.random()}` });
    }
    grid.push(rowArr);
  }
  return grid;
}

// Get pay value based on cluster size
export function getPayValue(symbol, clusterSize) {
  if (!symbol.pay8) return 0;
  if (clusterSize >= 16) return symbol.pay16;
  if (clusterSize >= 12) return symbol.pay12;
  if (clusterSize >= 8) return symbol.pay8;
  return 0;
}

// Get random multiplier value
export function getRandomMultiplier() {
  const weights = [40, 30, 20, 10]; // x2 most common, x16 rarest
  const totalWeight = weights.reduce((a, b) => a + b, 0);
  let rand = Math.random() * totalWeight;
  for (let i = 0; i < weights.length; i++) {
    rand -= weights[i];
    if (rand <= 0) return MULTIPLIER_VALUES[i];
  }
  return MULTIPLIER_VALUES[0];
}
