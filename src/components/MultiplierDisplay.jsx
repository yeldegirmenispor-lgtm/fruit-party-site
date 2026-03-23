import { useLanguage } from '../i18n/LanguageContext';

const multiplierColors = {
  2: 'from-green-400 to-green-600',
  4: 'from-blue-400 to-blue-600',
  8: 'from-purple-400 to-purple-600',
  16: 'from-red-400 to-red-600',
};

export default function MultiplierDisplay() {
  const { lang } = useLanguage();

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-fp-gold to-fp-red bg-clip-text text-transparent">
              {lang === 'tr' ? 'Çarpan Sistemi' : 'Multiplier System'}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {lang === 'tr'
              ? 'Fruit Party\'de çarpan sembolleri hem normal spinde hem de free spin turunda grid üzerinde rastgele belirir. Birden fazla çarpan varsa değerleri toplanarak devasa kazançlar yaratır!'
              : 'In Fruit Party, multiplier symbols appear randomly on the grid during both normal spins and free spins. Multiple multipliers are added together for massive wins!'}
          </p>
        </div>

        {/* Multiplier Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {[
            { value: 2, chance: '~40%' },
            { value: 4, chance: '~30%' },
            { value: 8, chance: '~20%' },
            { value: 16, chance: '~10%' },
          ].map((mult, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 text-center hover:scale-110 transition-transform cursor-default group"
            >
              <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${multiplierColors[mult.value]} flex items-center justify-center mb-3 group-hover:animate-multiplier`}>
                <span className="text-2xl">✨</span>
              </div>
              <div className="text-3xl font-black text-white mb-1">x{mult.value}</div>
              <div className="text-xs text-gray-500">{mult.chance}</div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="glass rounded-2xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-fp-gold mb-6 text-center">
            {lang === 'tr' ? 'Çarpan Toplama Sistemi' : 'Multiplier Addition System'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">✨ + ✨</div>
              <div className="font-bold text-white mb-1">x2 + x4</div>
              <div className="text-fp-gold font-bold text-xl">= x6</div>
              <div className="text-sm text-gray-400 mt-2">
                {lang === 'tr' ? 'Çarpanlar TOPLANIR' : 'Multipliers are ADDED'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✨ + ✨ + ✨</div>
              <div className="font-bold text-white mb-1">x4 + x8 + x16</div>
              <div className="text-fp-gold font-bold text-xl">= x28</div>
              <div className="text-sm text-gray-400 mt-2">
                {lang === 'tr' ? 'Çoklu çarpan = Dev kazanç' : 'Multi multiplier = Huge win'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔄</div>
              <div className="font-bold text-fp-green mb-1">
                {lang === 'tr' ? 'Free Spin Turunda' : 'During Free Spins'}
              </div>
              <div className="text-fp-green font-bold text-xl">{lang === 'tr' ? 'BİRİKİMLİ' : 'CUMULATIVE'}</div>
              <div className="text-sm text-gray-400 mt-2">
                {lang === 'tr' ? 'Çarpanlar silinmez, birikir!' : 'Multipliers persist and stack!'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
