import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const faqData = {
  tr: [
    { q: 'Fruit Party nedir?', a: 'Fruit Party, Pragmatic Play tarafından geliştirilen 7x7 grid yapısına sahip popüler bir video slot oyunudur. Türkiye\'de "meyve oyunu" veya "meyve partisi" olarak da bilinir. Cluster Pays ve Tumble mekaniği ile oynanır.' },
    { q: 'Fruit Party\'nin RTP\'si nedir?', a: 'Fruit Party\'nin standart RTP değeri %96.47\'dir. Bu oran slot oyunları arasında ortalamanın üzerindedir. Bazı platformlar farklı RTP versiyonları sunabilir.' },
    { q: 'Cluster Pays ne demek?', a: 'Cluster Pays, geleneksel payline sistemi yerine kullanılan bir kazanç mekanizmasıdır. 7x7 grid üzerinde aynı sembollerden en az 8 tanesinin yatay veya dikey olarak bitişik görünmesi kazanç oluşturur.' },
    { q: 'Tumble mekaniği nasıl çalışır?', a: 'Tumble mekaniğinde kazandıran semboller grid\'den kaldırılır ve yukarıdan yeni semboller düşer. Yeni eşleşme oluşursa tekrar tumble gerçekleşir. Tek bir spinde birden fazla kazanç mümkündür.' },
    { q: 'Free spin nasıl tetiklenir?', a: 'Grid üzerinde 3, 4 veya 5 scatter sembolü göründüğünde sırasıyla 8, 12 veya 15 bedava dönüş kazanırsınız. Free spin sırasında ek scatter düşerse ekstra dönüşler eklenir.' },
    { q: 'Çarpan sistemi nasıl çalışır?', a: 'Grid üzerinde rastgele x2, x4, x8 veya x16 çarpan sembolleri belirir. Bir kazanç oluştuğunda bu çarpanlar toplam ödemeye uygulanır. Birden fazla çarpan varsa değerleri TOPLANIR. Free spin turunda çarpanlar silinmez, birikimli devam eder.' },
    { q: 'Ante Bet nedir?', a: 'Ante Bet, bahsinizi %25 artırarak scatter sembollerinin düşme olasılığını artıran opsiyonel bir özelliktir. Free spin turuna daha hızlı girmek isteyenler için tasarlanmıştır.' },
    { q: 'Fruit Party\'de maksimum kazanç ne kadardır?', a: 'Fruit Party\'de maksimum kazanç bahsinizin yaklaşık 5.000 katıdır. Bu kazanç, free spin turunda yüksek çarpanların birikmesiyle teorik olarak mümkündür.' },
    { q: 'Demo modunda gerçek para kazanılır mı?', a: 'Hayır, demo modu tamamen ücretsiz ve eğitim amaçlıdır. Sanal bakiye ile oynanır ve gerçek para kazancı veya kaybı söz konusu değildir. Oyunun mekaniklerini öğrenmek için idealdir.' },
    { q: 'Fruit Party ile Sweet Bonanza arasındaki fark nedir?', a: 'Fruit Party 7x7 grid (49 sembol) kullanırken Sweet Bonanza 6x5 grid (30 sembol) kullanır. Fruit Party\'de çarpanlar base game\'de de belirir, Sweet Bonanza\'da ise yalnızca free spinde aktiftir. Her iki oyun da Pragmatic Play tarafından üretilmiştir.' },
  ],
  en: [
    { q: 'What is Fruit Party?', a: 'Fruit Party is a popular video slot game developed by Pragmatic Play with a 7x7 grid layout. It features Cluster Pays and Tumble mechanics with random multipliers.' },
    { q: 'What is the RTP of Fruit Party?', a: 'Fruit Party\'s standard RTP is 96.47%. This rate is above average among slot games. Some platforms may offer different RTP versions.' },
    { q: 'What does Cluster Pays mean?', a: 'Cluster Pays is a win mechanism where at least 8 matching symbols appearing adjacent horizontally or vertically on the 7x7 grid creates a win.' },
    { q: 'How does the Tumble mechanic work?', a: 'Winning symbols are removed from the grid and new symbols fall from above. If new matches form, another tumble occurs. Multiple wins possible in a single spin.' },
    { q: 'How is Free Spin triggered?', a: 'When 3, 4, or 5 scatter symbols land on the grid, you win 8, 12, or 15 free spins respectively. Additional scatters during free spins add extra spins.' },
    { q: 'How do multipliers work?', a: 'Random x2, x4, x8, or x16 multiplier symbols appear on the grid. When a win occurs, multipliers are applied. Multiple multipliers are ADDED together. In free spins, multipliers persist and accumulate.' },
    { q: 'What is Ante Bet?', a: 'Ante Bet increases your bet by 25% but raises the chance of scatter symbols appearing. Designed for those who want to trigger free spins faster.' },
    { q: 'What is the maximum win in Fruit Party?', a: 'The maximum win in Fruit Party is approximately 5,000x your bet, achievable through accumulated high multipliers during free spins.' },
    { q: 'Can I win real money in demo mode?', a: 'No, demo mode is completely free and for educational purposes. It uses virtual balance with no real money involved.' },
    { q: 'What is the difference between Fruit Party and Sweet Bonanza?', a: 'Fruit Party uses a 7x7 grid (49 symbols) while Sweet Bonanza uses 6x5 (30 symbols). Fruit Party multipliers appear in base game too, while Sweet Bonanza multipliers only appear in free spins. Both are by Pragmatic Play.' },
  ],
};

export default function FAQ() {
  const { t, lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = faqData[lang];

  return (
    <section className="py-16 px-4" id="sss">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="bg-gradient-to-r from-fp-green to-fp-purple bg-clip-text text-transparent">
            {t('faq.title')}
          </span>
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-white pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-fp-green shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-gray-400 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FAQ Schema for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqData.tr.map(faq => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }} />
      </div>
    </section>
  );
}
