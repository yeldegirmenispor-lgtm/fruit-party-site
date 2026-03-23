import { useState, useCallback, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { generateGrid, MULTIPLIER_EMOJI } from './FruitSymbols';
import { executeSpin } from './ClusterEngine';

const BET_LEVELS = [0.20, 0.40, 0.60, 1.00, 2.00, 5.00, 10.00];

export default function FruitPartySlot() {
  const { t } = useLanguage();
  const [grid, setGrid] = useState(() => generateGrid());
  const [balance, setBalance] = useState(1000);
  const [betIndex, setBetIndex] = useState(3);
  const [, setWin] = useState(0);
  const [totalWin, setTotalWin] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [anteBet, setAnteBet] = useState(false);
  const [freeSpin, setFreeSpin] = useState(false);
  const [freeSpinsLeft, setFreeSpinsLeft] = useState(0);
  const [clusterCells, setClusterCells] = useState(new Set());
  const [multipliers, setMultipliers] = useState([]);
  const [multiplierDisplay, setMultiplierDisplay] = useState(0);
  const [message, setMessage] = useState('');
  const animRef = useRef(null);

  const bet = BET_LEVELS[betIndex] * (anteBet ? 1.25 : 1);

  const clearHighlights = useCallback(() => {
    setClusterCells(new Set());
    setMultipliers([]);
    setMultiplierDisplay(0);
    setMessage('');
  }, []);

  const animateSteps = useCallback(async (steps) => {
    for (const step of steps) {
      await new Promise(resolve => {
        animRef.current = setTimeout(resolve, 600);
      });

      setGrid(step.grid);

      if (step.type === 'cluster' && step.clusters.length > 0) {
        const cells = new Set();
        step.clusters.forEach(c => c.positions.forEach(([r, cc]) => cells.add(`${r}-${cc}`)));
        setClusterCells(cells);
        setMultipliers(step.multipliers);

        if (step.win.multiplier > 1) {
          setMultiplierDisplay(step.win.multiplier);
        }
        if (step.win.totalWin > 0) {
          setWin(prev => prev + step.win.totalWin);
        }

        await new Promise(resolve => {
          animRef.current = setTimeout(resolve, 800);
        });
      } else {
        setClusterCells(new Set());
      }
    }
  }, []);

  const doSpin = useCallback(async () => {
    if (spinning) return;

    const isFS = freeSpin && freeSpinsLeft > 0;
    if (!isFS && balance < bet) return;

    setSpinning(true);
    clearHighlights();
    setWin(0);
    setTotalWin(0);

    if (!isFS) {
      setBalance(prev => prev - bet);
    } else {
      setFreeSpinsLeft(prev => prev - 1);
    }

    // Generate new grid (with scatter boost if ante bet)
    const scatterBoost = anteBet ? 1.5 : 1;
    const newGrid = generateGrid(scatterBoost);
    setGrid(newGrid);

    await new Promise(resolve => {
      animRef.current = setTimeout(resolve, 300);
    });

    // Execute spin logic
    const result = executeSpin(newGrid, bet, isFS);

    // Animate steps
    if (result.steps.length > 0) {
      await animateSteps(result.steps);
    }

    // Apply wins
    if (result.totalWin > 0) {
      setBalance(prev => prev + result.totalWin);
      setTotalWin(result.totalWin);
      setMessage(`🎉 ${result.totalWin.toFixed(2)} TL Kazanç!`);
    }

    // Check free spin trigger
    if (result.triggeredFreeSpin && !isFS) {
      setFreeSpin(true);
      setFreeSpinsLeft(result.freeSpinCount);
      setMessage(`⭐ FREE SPIN! ${result.freeSpinCount} Bedava Dönüş!`);
    } else if (result.triggeredFreeSpin && isFS) {
      setFreeSpinsLeft(prev => prev + result.freeSpinCount);
      setMessage(`⭐ +${result.freeSpinCount} Ekstra Free Spin!`);
    }

    // End free spin mode
    if (isFS && freeSpinsLeft <= 1 && !result.triggeredFreeSpin) {
      setFreeSpin(false);
      setFreeSpinsLeft(0);
    }

    setGrid(result.finalGrid);
    setSpinning(false);
  }, [spinning, balance, bet, freeSpin, freeSpinsLeft, anteBet, animateSteps, clearHighlights]);

  useEffect(() => {
    return () => {
      if (animRef.current) clearTimeout(animRef.current);
    };
  }, []);

  return (
    <section id="demo-slot" className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-fp-green to-fp-purple bg-clip-text text-transparent">
              Fruit Party Demo
            </span>
          </h2>
          <p className="text-gray-400">7x7 Cluster Pays | Tumble Mekaniği</p>
        </div>

        {/* Free Spin Banner */}
        {freeSpin && (
          <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-fp-gold/20 to-fp-green/20 border border-fp-gold/30 text-center">
            <span className="text-fp-gold font-bold text-lg">
              ⭐ {t('slot.freeSpins')} — {t('slot.freeSpinsLeft')}: {freeSpinsLeft}
            </span>
          </div>
        )}

        {/* Message */}
        {message && (
          <div className="mb-4 p-3 rounded-xl glass text-center text-lg font-bold text-fp-gold animate-pulse">
            {message}
          </div>
        )}

        {/* 7x7 Grid */}
        <div className="glass rounded-2xl p-2 md:p-3 glow-green">
          <div className="grid grid-cols-7 gap-0.5 md:gap-1">
            {grid.map((row, r) =>
              row.map((cell, c) => {
                const isCluster = clusterCells.has(`${r}-${c}`);
                const mult = multipliers.find(m => m.row === r && m.col === c);

                return (
                  <div
                    key={cell?.key || `${r}-${c}`}
                    className={`
                      aspect-square flex items-center justify-center rounded-lg text-lg md:text-2xl lg:text-3xl
                      transition-all duration-300 relative
                      ${isCluster
                        ? 'bg-fp-gold/30 scale-110 ring-2 ring-fp-gold animate-pop'
                        : 'bg-white/5 hover:bg-white/10'
                      }
                      ${cell?.isNew ? 'animate-tumble' : ''}
                    `}
                  >
                    {cell?.emoji}
                    {mult && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-fp-gold rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold animate-multiplier z-10 text-black">
                        x{mult.value}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Multiplier Display */}
        {multiplierDisplay > 0 && (
          <div className="mt-4 text-center">
            <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-fp-gold to-fp-red text-white font-black text-2xl animate-multiplier">
              {MULTIPLIER_EMOJI} x{multiplierDisplay} {t('slot.multiplier')}!
            </span>
          </div>
        )}

        {/* Controls */}
        <div className="mt-6 glass rounded-2xl p-4">
          {/* Balance/Bet/Win Row */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-xs text-gray-400 uppercase">{t('slot.balance')}</div>
              <div className="text-lg font-bold text-white">{balance.toFixed(2)}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400 uppercase">{t('slot.bet')}</div>
              <div className="text-lg font-bold text-fp-gold">{bet.toFixed(2)}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400 uppercase">{t('slot.win')}</div>
              <div className={`text-lg font-bold ${totalWin > 0 ? 'text-fp-gold' : 'text-white'}`}>
                {totalWin.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Bet Control + Spin */}
          <div className="flex items-center gap-3">
            {/* Bet decrease */}
            <button
              onClick={() => setBetIndex(prev => Math.max(0, prev - 1))}
              disabled={spinning || freeSpin}
              className="w-10 h-10 rounded-lg glass text-white font-bold text-xl disabled:opacity-30 hover:bg-white/10"
            >
              −
            </button>

            {/* Spin Button */}
            <button
              onClick={doSpin}
              disabled={spinning || (!freeSpin && balance < bet)}
              className={`
                flex-1 py-4 rounded-xl font-black text-xl text-white transition-all duration-300
                ${spinning
                  ? 'bg-gray-600 cursor-not-allowed'
                  : freeSpin
                    ? 'bg-gradient-to-r from-fp-gold to-fp-green hover:scale-[1.02] glow-gold'
                    : 'bg-gradient-to-r from-fp-green to-fp-red hover:scale-[1.02] glow-green'
                }
                disabled:opacity-50
              `}
            >
              {spinning ? '⏳' : freeSpin ? `⭐ ${t('slot.freeSpins')}` : `🎰 ${t('slot.spin')}`}
            </button>

            {/* Bet increase */}
            <button
              onClick={() => setBetIndex(prev => Math.min(BET_LEVELS.length - 1, prev + 1))}
              disabled={spinning || freeSpin}
              className="w-10 h-10 rounded-lg glass text-white font-bold text-xl disabled:opacity-30 hover:bg-white/10"
            >
              +
            </button>
          </div>

          {/* Ante Bet Toggle */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="text-sm text-gray-400">{t('slot.anteBet')}</span>
            <button
              onClick={() => setAnteBet(prev => !prev)}
              disabled={spinning || freeSpin}
              className={`
                relative w-12 h-6 rounded-full transition-colors duration-300
                ${anteBet ? 'bg-fp-gold' : 'bg-gray-600'}
              `}
            >
              <span
                className={`
                  absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300
                  ${anteBet ? 'translate-x-6' : 'translate-x-0.5'}
                `}
              />
            </button>
            <span className="text-xs text-gray-500">(+25% bahis, scatter artışı)</span>
          </div>
        </div>

        {/* Symbol Reference */}
        <div className="mt-6 glass rounded-xl p-4">
          <h3 className="text-sm font-semibold text-gray-400 mb-3 text-center uppercase">Sembol Tablosu</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 text-center text-sm">
            {[
              { e: '🍓', n: 'Çilek', p: '50x' },
              { e: '🍇', n: 'Üzüm', p: '40x' },
              { e: '🍋', n: 'Limon', p: '30x' },
              { e: '🍊', n: 'Portakal', p: '20x' },
              { e: '🍉', n: 'Karpuz', p: '15x' },
              { e: '🍏', n: 'Elma', p: '10x' },
              { e: '🍑', n: 'Şeftali', p: '8x' },
              { e: '🍒', n: 'Kiraz', p: '6x' },
              { e: '⭐', n: 'Scatter', p: 'Free Spin' },
              { e: '✨', n: 'Çarpan', p: 'x2-x16' },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 rounded-lg p-2">
                <span className="text-xl">{s.e}</span>
                <div className="text-xs text-gray-400 mt-1">{s.n}</div>
                <div className="text-xs text-fp-gold font-bold">{s.p}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
