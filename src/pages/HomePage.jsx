import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import CasinoCards from '../components/CasinoCards';
import FruitPartySlot from '../components/FruitPartySlot';
import MultiplierDisplay from '../components/MultiplierDisplay';
import FAQ from '../components/FAQ';
import { useLanguage } from '../i18n/LanguageContext';

function GameIntroSection() {
  const { lang } = useLanguage();
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-fp-green to-fp-red bg-clip-text text-transparent">
            {lang === 'tr' ? 'Fruit Party Nedir? — Meyve Oyunu Tanıtımı' : 'What is Fruit Party? — Fruit Game Introduction'}
          </span>
        </h2>
        <div className="glass rounded-2xl p-6 md:p-8">
          <p className="text-gray-300 leading-relaxed mb-4">
            {lang === 'tr'
              ? 'Fruit Party, Malta merkezli oyun devi Pragmatic Play tarafından geliştirilen ve renkli meyve temasını modern Cluster Pays mekaniğiyle buluşturan eşsiz bir video slot oyunudur. Türkiye\'de \'meyve oyunu\' veya \'meyve partisi\' olarak da anılan Fruit Party, 7x7 grid, Cluster Pays kazanç sistemi, Tumble (çığ) mekaniği ve rastgele çarpan sembollerinden oluşan özgün yapısıyla slot dünyasında belirgin bir yer edinmiştir.'
              : 'Fruit Party is a unique video slot developed by Pragmatic Play that combines a colorful fruit theme with modern Cluster Pays mechanics. Featuring a 7x7 grid, Cluster Pays win system, Tumble mechanics, and random multiplier symbols, Fruit Party has earned a distinctive place in the slot world.'}
          </p>
          <p className="text-gray-300 leading-relaxed">
            {lang === 'tr'
              ? 'Pragmatic Play\'in popüler Sweet Bonanza oyunuyla akraba mekaniklere sahip olsa da Fruit Party kendi özgün 7x7 grid yapısı, farklı sembol seti ve çarpan dağılımı ile ayrışır. 49 sembolün yer aldığı grid, standart 5x3 oyunların neredeyse üç katı büyüklüğünde bir oyun alanı sunar.'
              : 'While sharing similar mechanics with Pragmatic Play\'s popular Sweet Bonanza, Fruit Party distinguishes itself with its unique 7x7 grid structure, different symbol set, and multiplier distribution. The grid with 49 symbols offers nearly three times the playing area of standard 5x3 games.'}
          </p>
        </div>
      </div>
    </section>
  );
}

function HowToPlaySection() {
  const { lang } = useLanguage();
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="bg-gradient-to-r from-fp-green to-fp-purple bg-clip-text text-transparent">
            {lang === 'tr' ? 'Nasıl Oynanır — 7x7 Cluster Pays Rehberi' : 'How to Play — 7x7 Cluster Pays Guide'}
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: '🎰',
              title: lang === 'tr' ? '1. Grid Doluşu' : '1. Grid Fill',
              desc: lang === 'tr' ? '7 sütun ve 7 satırdan oluşan grid, 49 sembolle dolar. Meyve sembolleri ağırlıklarına göre rastgele yerleşir.' : 'The 7x7 grid fills with 49 symbols. Fruit symbols are randomly placed based on weights.',
            },
            {
              icon: '🔗',
              title: lang === 'tr' ? '2. Cluster Eşleştirme' : '2. Cluster Match',
              desc: lang === 'tr' ? '8 veya daha fazla aynı sembol bitişik konumda (yatay/dikey) görünürse kazanç oluşur. Çapraz bağlantılar geçersizdir!' : '8+ matching symbols adjacent (horizontal/vertical) create a win. Diagonal connections don\'t count!',
            },
            {
              icon: '💥',
              title: lang === 'tr' ? '3. Tumble (Çığ)' : '3. Tumble (Cascade)',
              desc: lang === 'tr' ? 'Kazanan semboller kaldırılır, yukarıdan yenileri düşer. Yeni cluster oluşursa tekrar tumble — ta ki kazanç kalmayana kadar.' : 'Winning symbols removed, new ones fall. If new cluster forms, tumble repeats until no wins remain.',
            },
            {
              icon: '⭐',
              title: lang === 'tr' ? '4. Free Spin' : '4. Free Spins',
              desc: lang === 'tr' ? '3 scatter = 8 FS, 4 scatter = 12 FS, 5 scatter = 15 FS. Free spin turunda çarpanlar birikimli devam eder!' : '3 scatter = 8 FS, 4 scatter = 12 FS, 5 scatter = 15 FS. Multipliers accumulate during free spins!',
            },
          ].map((step, i) => (
            <div key={i} className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
              <span className="text-4xl">{step.icon}</span>
              <h3 className="text-xl font-bold text-white mt-3 mb-2">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClusterPaysSection() {
  const { lang } = useLanguage();
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-fp-purple to-fp-gold bg-clip-text text-transparent">
            {lang === 'tr' ? 'Cluster Pays — 8+ Bağlantılı Sembol Sistemi' : 'Cluster Pays — 8+ Connected Symbol System'}
          </span>
        </h2>
        <div className="glass rounded-2xl p-6 md:p-8">
          <p className="text-gray-300 leading-relaxed mb-4">
            {lang === 'tr'
              ? 'Cluster Pays, sembollerin belirli satır veya sütunlarda dizilmesi yerine birbirine yatay veya dikey olarak bağlantı 8 veya daha fazla aynı sembolün bulunmasını gerektiren kazanç mekanizmasıdır. 7x7 grid üzerinde bu bağlantı son derece sık oluşabilir ve Tumble mekaniğiyle zincirleme kazançlar üretebilir.'
              : 'Cluster Pays requires 8 or more matching symbols connected horizontally or vertically, instead of symbols aligning on specific rows or columns. On the 7x7 grid, these connections form frequently and can produce chain wins through the Tumble mechanic.'}
          </p>
          <p className="text-gray-300 leading-relaxed">
            {lang === 'tr'
              ? 'Matematiksel olarak 7x7 grid üzerinde birbirine bağlı 8+ sembol için çok sayıda kombinasyon mümkündür. Cluster ne kadar büyük olursa ödeme katsayısı da o denli artar. 49 sembolü grid, Sweet Bonanza\'nın 6x5 = 30 sembolünden çok daha geniş bir kazanç alanı sunar.'
              : 'Mathematically, there are numerous combinations possible for 8+ connected symbols on the 7x7 grid. The larger the cluster, the higher the payout multiplier. The 49-symbol grid offers a much wider win area than Sweet Bonanza\'s 6x5 = 30 symbols.'}
          </p>
        </div>
      </div>
    </section>
  );
}

function TacticsSection() {
  const { lang } = useLanguage();
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="bg-gradient-to-r from-fp-gold to-fp-red bg-clip-text text-transparent">
            {lang === 'tr' ? 'Taktikler ve Strateji' : 'Tactics & Strategy'}
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: '💰',
              title: lang === 'tr' ? 'Bütçe Yönetimi' : 'Budget Management',
              tips: lang === 'tr'
                ? ['Oturum başına limit belirleyin', 'Bahis: bütçenin %1-2\'si', 'Minimum 100-150 tur yetecek bütçe', 'Kayıp limiti ve kazanç hedefi']
                : ['Set session limits', 'Bet: 1-2% of budget', 'Budget for 100-150 spins', 'Loss limit and win target'],
            },
            {
              icon: '🎯',
              title: 'Ante Bet',
              tips: lang === 'tr'
                ? ['Bahsi %25 artırır', 'Scatter olasılığı artar', 'Uzun oturumlarda kullanın', 'Kısa bütçelerde standart mod']
                : ['Increases bet by 25%', 'Scatter chance increases', 'Use in long sessions', 'Standard mode for short budgets'],
            },
            {
              icon: '✨',
              title: lang === 'tr' ? 'Çarpan Stratejisi' : 'Multiplier Strategy',
              tips: lang === 'tr'
                ? ['Çarpanlar tamamen rastgele', 'x2/x4 en sık görünür', 'Free spinde çarpanlar birikir', 'Demo modda sıklığı gözlemleyin']
                : ['Multipliers are random', 'x2/x4 appear most often', 'Multipliers accumulate in FS', 'Observe frequency in demo'],
            },
          ].map((tactic, i) => (
            <div key={i} className="glass rounded-2xl p-6">
              <span className="text-4xl">{tactic.icon}</span>
              <h3 className="text-xl font-bold text-white mt-3 mb-4">{tactic.title}</h3>
              <ul className="space-y-2">
                {tactic.tips.map((tip, ti) => (
                  <li key={ti} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-fp-gold mt-0.5">✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BonusTable() {
  const { lang } = useLanguage();
  const casinos = [
    { name: 'Discount Casino', bonus: '2.500 TL', fs: '150 Free Spin', wagering: '35x' },
    { name: 'Jetbahis', bonus: '5.000 TL', fs: '200 Free Spin', wagering: '40x' },
    { name: 'Celtabet', bonus: '3.000 TL', fs: '100 Free Spin', wagering: '38x' },
    { name: 'Lord Casino', bonus: '4.000 TL', fs: '120 Free Spin', wagering: '42x' },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="bg-gradient-to-r from-fp-gold to-fp-purple bg-clip-text text-transparent">
            {lang === 'tr' ? 'Bonus Karşılaştırma Tablosu' : 'Bonus Comparison Table'}
          </span>
        </h2>

        <div className="glass rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-3 text-left text-gray-400 font-medium">Casino</th>
                  <th className="px-4 py-3 text-left text-gray-400 font-medium">{lang === 'tr' ? 'Hoş Geldin Bonusu' : 'Welcome Bonus'}</th>
                  <th className="px-4 py-3 text-left text-gray-400 font-medium">Free Spin</th>
                  <th className="px-4 py-3 text-left text-gray-400 font-medium">{lang === 'tr' ? 'Çevrim Şartı' : 'Wagering'}</th>
                </tr>
              </thead>
              <tbody>
                {casinos.map((casino, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-semibold text-white">{casino.name}</td>
                    <td className="px-4 py-3 text-fp-gold font-bold">{casino.bonus}</td>
                    <td className="px-4 py-3 text-fp-green">{casino.fs}</td>
                    <td className="px-4 py-3 text-gray-300">{casino.wagering}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function NicknameBlock() {
  const { lang } = useLanguage();
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto glass rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-bold text-fp-green mb-4">
          {lang === 'tr' ? 'Meyve Oyunu — Fruit Party\'nin Türkiye\'deki Takma İsimleri' : 'Fruit Game — Fruit Party\'s Nicknames in Turkey'}
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          {lang === 'tr'
            ? 'Türkiye\'de slot oyuncuları arasında Fruit Party, \'meyve oyunu\' ve \'meyve partisi\' aramaları üzerinden bulunmaktadır. Sweet Bonanza ile kıyaslamalar da yüksek arama hacmine sahiptir.'
            : 'Among slot players in Turkey, Fruit Party is found through \'meyve oyunu\' (fruit game) and \'meyve partisi\' (fruit party) searches.'}
        </p>
        <ul className="space-y-2 text-gray-300">
          <li><strong className="text-fp-gold">Fruit Party = Meyve Oyunu</strong> — {lang === 'tr' ? 'Meyve temasına vurgu yaparak' : 'Emphasizing the fruit theme'}</li>
          <li><strong className="text-fp-gold">Fruit Party = Meyve Partisi</strong> — {lang === 'tr' ? 'Direkt Türkçe karşılık' : 'Direct Turkish translation'}</li>
          <li><strong className="text-fp-gold">Fruit Party = Çarpanlı Meyve Slotu</strong> — {lang === 'tr' ? 'Çarpan mekaniğine vurgu' : 'Emphasizing multiplier mechanic'}</li>
          <li><strong className="text-fp-gold">Fruit Party = Cluster Meyve</strong> — {lang === 'tr' ? 'Cluster pays mekanik özelliğine dikkat çekerek' : 'Highlighting cluster pays mechanic'}</li>
        </ul>
      </div>
    </section>
  );
}

function SEOBlock() {
  const { lang } = useLanguage();
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto glass rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-bold text-fp-purple mb-4">
          {lang === 'tr' ? 'Fruit Party Tam Rehber — Meyve Oyunu Hakkında Her Şey' : 'Fruit Party Complete Guide — Everything About the Fruit Game'}
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          {lang === 'tr'
            ? 'Bu site, Pragmatic Play\'in renkli meyve temasını modern slot mekaniğiyle buluşturan Fruit Party\'yi tek bir platformda kapsamlı biçimde sunar. Oyunun 7x7 Cluster Pays yapısı, Tumble mekaniği, rastgele çarpan sistemi ve ücretsiz demo versiyonu, taktik rehberleri, casino karşılaştırmaları ve SEO uyumlu makaleleriyle bir arada sunulur.'
            : 'This site comprehensively presents Fruit Party — Pragmatic Play\'s game that combines a colorful fruit theme with modern slot mechanics — on a single platform. The game\'s 7x7 Cluster Pays structure, Tumble mechanics, random multiplier system, and free demo version are presented alongside tactical guides, casino comparisons, and SEO-optimized articles.'}
        </p>
        <p className="text-gray-300 leading-relaxed">
          {lang === 'tr'
            ? 'Fruit Party, Sweet Bonanza ile benzer mekanikler paylaşmakla birlikte kendine özgü 7x7 grid yapısı, farklı sembol seti ve çarpan dağılımı ile distinct bir deneyim sunar. Türkiye\'de \'meyve oyunu\' veya \'meyve partisi\' olarak aranan bu oyun, cluster pays sistemine yeni giren oyuncular için ideal bir giriş noktasıdır.'
            : 'While sharing similar mechanics with Sweet Bonanza, Fruit Party offers a distinct experience with its unique 7x7 grid structure, different symbol set, and multiplier distribution. Known as \'meyve oyunu\' in Turkey, this game is an ideal entry point for players new to the cluster pays system.'}
        </p>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Fruit Party Demo | Meyve Oyunu Ücretsiz Oyna | 7x7 Cluster Pays Slot"
        description="Fruit Party (meyve oyunu) demo oyna. 7x7 grid, Cluster Pays, Tumble mekaniği ve rastgele çarpanlar. Pragmatic Play'in renkli meyve slotu hakkında taktikler, RTP analizi ve casino incelemeleri."
        path="/"
      />
      <Hero />
      <CasinoCards />
      <FruitPartySlot />
      <GameIntroSection />
      <HowToPlaySection />
      <ClusterPaysSection />
      <MultiplierDisplay />
      <TacticsSection />
      <BonusTable />
      <NicknameBlock />
      <SEOBlock />
      <FAQ />
    </>
  );
}
