import SEOHead from '../components/SEOHead';
import CasinoCards from '../components/CasinoCards';
import { useLanguage } from '../i18n/LanguageContext';

const casinoDetails = [
  {
    name: 'Discount Casino',
    icon: '🥇',
    color: 'from-yellow-500 to-orange-500',
    bonus: '2.500 TL + 150 Free Spin',
    minDeposit: '100 TL',
    wagering: '35x',
    license: 'Curacao',
    rating: '4.9/5',
    tr: {
      review: 'Discount Casino, Fruit Party oyuncuları için özel olarak tasarlanmış hoş geldin bonusuyla dikkat çekmektedir. Hızlı ödeme süreleri ve 7/24 canlı destek hizmetiyle kullanıcı memnuniyetini ön planda tutan platform, Pragmatic Play oyunlarının tamamını portföyünde barındırmaktadır. Mobil uyumlu arayüzü sayesinde meyve oyununu istediğiniz yerden oynayabilirsiniz.',
    },
    en: {
      review: 'Discount Casino features a welcome bonus specially designed for Fruit Party players. With fast payout times and 24/7 live support, the platform carries the full Pragmatic Play portfolio. Mobile-friendly interface lets you play the fruit game anywhere.',
    },
  },
  {
    name: 'Jetbahis',
    icon: '🥈',
    color: 'from-blue-500 to-cyan-500',
    bonus: '5.000 TL + 200 Free Spin',
    minDeposit: '50 TL',
    wagering: '40x',
    license: 'Malta (MGA)',
    rating: '4.8/5',
    tr: {
      review: 'Jetbahis, geniş bonus yapısıyla Fruit Party oyuncuları arasında oldukça popülerdir. Düşük minimum depozit miktarı ile yeni oyuncular için erişilebilir bir seçenek sunar. Platform, Pragmatic Play ile özel anlaşmalar sayesinde Fruit Party turnuvaları ve promosyonları düzenlemektedir.',
    },
    en: {
      review: 'Jetbahis is highly popular among Fruit Party players with its generous bonus structure. With low minimum deposit, it offers an accessible option for new players. The platform hosts special Fruit Party tournaments.',
    },
  },
  {
    name: 'Celtabet',
    icon: '🥉',
    color: 'from-green-500 to-emerald-500',
    bonus: '3.000 TL + 100 Free Spin',
    minDeposit: '75 TL',
    wagering: '38x',
    license: 'Curacao',
    rating: '4.6/5',
    tr: {
      review: 'Celtabet, deneme bonusu seçenekleriyle öne çıkan güvenilir bir platformdur. Fruit Party başta olmak üzere Pragmatic Play\'in popüler slot oyunlarını geniş bir koleksiyonla sunmaktadır. 7/24 müşteri desteği ve güvenilir lisans yapısıyla dikkat çeken Celtabet, meyve oyunu severler için ideal bir tercihtir.',
    },
    en: {
      review: 'Celtabet stands out with trial bonus options. It offers a wide collection of Pragmatic Play slots including Fruit Party. 24/7 customer support and trusted licensing make it a reliable choice.',
    },
  },
  {
    name: 'Lord Casino',
    icon: '👑',
    color: 'from-purple-500 to-pink-500',
    bonus: '4.000 TL + 120 Free Spin',
    minDeposit: '200 TL',
    wagering: '42x',
    license: 'Malta (MGA)',
    rating: '4.5/5',
    tr: {
      review: 'Lord Casino, premium platformdur. VIP programı ve yüksek bahis limitleriyle deneyimli oyuncuları hedefler. Fruit Party turnuvaları düzenli olarak gerçekleştirilmekte ve özel promosyonlar sunulmaktadır. Meyve oyunu için cömert free spin paketini sunan Lord Casino, ciddi oyuncular için ideal bir seçenektir.',
    },
    en: {
      review: 'Lord Casino is a premium platform. VIP program and high bet limits target experienced players. Regular Fruit Party tournaments and special promotions are available.',
    },
  },
];

export default function CasinoReviews() {
  const { lang } = useLanguage();

  return (
    <div className="pt-20 pb-16">
      <SEOHead
        title="Fruit Party Casino İncelemeleri | Meyve Oyunu Oynayabileceğiniz Siteler"
        description="Fruit Party oynayabileceğiniz güvenilir casino siteleri. Bonus, free spin ve meyve oyunu için en iyi platformların detaylı incelemeleri."
        path="/casino-incelemeleri"
      />

      <CasinoCards />

      {/* Detailed Reviews */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <h2 className="text-3xl font-bold text-center mb-10">
          <span className="bg-gradient-to-r from-fp-gold to-fp-green bg-clip-text text-transparent">
            {lang === 'tr' ? 'Detaylı Casino İncelemeleri' : 'Detailed Casino Reviews'}
          </span>
        </h2>

        <div className="space-y-8">
          {casinoDetails.map((casino, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <div className={`p-4 bg-gradient-to-r ${casino.color}`}>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="text-2xl">{casino.icon}</span>
                  {casino.name}
                  <span className="ml-auto text-sm bg-white/20 px-2 py-1 rounded-full">{casino.rating}</span>
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <div className="text-xs text-gray-400 uppercase">Bonus</div>
                    <div className="text-fp-gold font-bold">{casino.bonus}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase">Min Depozit</div>
                    <div className="text-white font-medium">{casino.minDeposit}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase">{lang === 'tr' ? 'Çevrim' : 'Wagering'}</div>
                    <div className="text-white font-medium">{casino.wagering}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase">{lang === 'tr' ? 'Lisans' : 'License'}</div>
                    <div className="text-white font-medium">{casino.license}</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{casino[lang].review}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Sections */}
        <div className="mt-16 space-y-10">
          <div className="glass rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-fp-green mb-4">
              {lang === 'tr' ? 'Fruit Party Deneme Bonusu Veren Siteler' : 'Sites Offering Fruit Party Trial Bonus'}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {lang === 'tr'
                ? 'Fruit Party deneme bonusu veren siteler, meyve oyunu meraklılarının risksiz şekilde oyunu deneyimlemesine olanak tanır. Deneme bonusları genellikle kayıt sonrası otomatik olarak tanımlanır ve belirli çevrim şartlarına tabidir. Bu bonusları kullanarak Fruit Party\'nin Cluster Pays mekaniğini, Tumble özelliğini ve çarpan sistemini gerçek casino ortamında test edebilirsiniz.'
                : 'Sites offering Fruit Party trial bonuses allow players to experience the game risk-free. Trial bonuses are usually credited after registration with certain wagering requirements.'}
            </p>
          </div>

          <div className="glass rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-fp-gold mb-4">
              {lang === 'tr' ? 'Fruit Party Free Spin Veren Siteler' : 'Sites Offering Fruit Party Free Spins'}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {lang === 'tr'
                ? 'Fruit Party free spin bonusları, meyve oyununu bedava dönüşlerle oynama imkânı sunar. Free spin bonusları, hoş geldin paketi kapsamında veya özel promosyonlar aracılığıyla sunulabilir. Bazı platformlar Fruit Party\'ye özel free spin kampanyaları düzenleyerek oyunculara ekstra değer sunmaktadır.'
                : 'Fruit Party free spin bonuses offer the chance to play with complimentary spins. Free spin bonuses may be offered as part of welcome packages or special promotions.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
