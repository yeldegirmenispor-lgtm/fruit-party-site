import { useLanguage } from '../i18n/LanguageContext';
import { Link } from 'react-router-dom';

const casinos = [
  {
    name: 'Discount Casino',
    bonus: '2.500 TL + 150 Free Spin',
    rating: 4.9,
    features: { tr: ['Hızlı Ödeme', 'Canlı Destek', 'Fruit Party Özel Bonus'], en: ['Fast Payout', 'Live Support', 'Fruit Party Special Bonus'] },
    color: 'from-yellow-500 to-orange-500',
    icon: '🥇',
  },
  {
    name: 'Jetbahis',
    bonus: '5.000 TL + 200 Free Spin',
    rating: 4.8,
    features: { tr: ['Çevrimsiz Bonus', 'Mobil Uyumlu', 'Pragmatic Play Özel'], en: ['No Wagering Bonus', 'Mobile Ready', 'Pragmatic Play Special'] },
    color: 'from-blue-500 to-cyan-500',
    icon: '🥈',
  },
  {
    name: 'Celtabet',
    bonus: '3.000 TL + 100 Free Spin',
    rating: 4.6,
    features: { tr: ['Deneme Bonusu', '7/24 Destek', 'Güvenilir Lisans'], en: ['Trial Bonus', '24/7 Support', 'Trusted License'] },
    color: 'from-green-500 to-emerald-500',
    icon: '🥉',
  },
  {
    name: 'Lord Casino',
    bonus: '4.000 TL + 120 Free Spin',
    rating: 4.5,
    features: { tr: ['VIP Program', 'Yüksek Limit', 'Fruit Party Turnuva'], en: ['VIP Program', 'High Limit', 'Fruit Party Tournament'] },
    color: 'from-purple-500 to-pink-500',
    icon: '👑',
  },
];

export default function CasinoCards() {
  const { t, lang } = useLanguage();

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-fp-gold to-fp-red bg-clip-text text-transparent">
              {t('casino.title')}
            </span>
          </h2>
          <p className="text-gray-400 text-lg">{t('casino.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {casinos.map((casino, i) => (
            <div
              key={i}
              className="glass rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 group"
            >
              {/* Header */}
              <div className={`p-4 bg-gradient-to-r ${casino.color}`}>
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{casino.icon}</span>
                  <div>
                    <h3 className="font-bold text-white text-lg">{casino.name}</h3>
                    <div className="flex items-center gap-1">
                      {'⭐'.repeat(Math.floor(casino.rating))}
                      <span className="text-sm text-white/80 ml-1">{casino.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-4">
                <div className="mb-3">
                  <div className="text-xs text-gray-400 uppercase mb-1">{t('casino.bonus')}</div>
                  <div className="text-fp-gold font-bold text-lg">{casino.bonus}</div>
                </div>

                <ul className="space-y-2 mb-4">
                  {casino.features[lang].map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-fp-green">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-lg bg-gradient-to-r from-fp-green to-fp-red text-white text-sm font-bold hover:opacity-90 transition-opacity">
                    {t('casino.visit')}
                  </button>
                  <Link
                    to="/casino-incelemeleri"
                    className="flex-1 py-2 rounded-lg glass text-center text-white text-sm font-medium hover:bg-white/10"
                  >
                    {t('casino.review')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
