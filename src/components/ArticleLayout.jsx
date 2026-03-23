import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import SEOHead from './SEOHead';

const authors = {
  kaan: {
    name: 'Kaan Yılmaz',
    bio: 'On yıldır slot oyunları ve casino mekaniği üzerine teknik içerik üretmektedir. Matematik ve istatistik altyapısı sayesinde Cluster Pays sistemlerini, Tumble mekaniklerini ve Pragmatic Play\'e özgü oyun yapılarını analitik bir perspektifle ele alır.',
    avatar: '👨‍💼',
    years: 10,
    title: 'Pragmatic Play & Cluster Pays Uzmanı',
    handle: '@kaan_slotanaliz',
  },
  ece: {
    name: 'Ece Tuncer',
    bio: 'Yedi yıldır slot stratejileri ve oyuncu eğitimi alanında içerik üreten ve YouTube üzerinden geniş bir kitleye ulaşan deneyimli bir iGaming yazarı ve içerik üreticisidir.',
    avatar: '👩‍💻',
    years: 7,
    title: 'Slot Strateji & Çarpan Uzmanı',
    handle: '@ece_casinostrateji',
  },
  deniz: {
    name: 'Deniz Karaoğlu',
    bio: 'Altı yıldır Türkiye ve Avrupa casino piyasasını analiz eden, Pragmatic Play oyunlarına odaklanan iGaming yazarıdır. Casino bonus analizi, lisans güvenliği ve Pragmatic Play oyunlarının erişilebilirliği konularında uzmandır.',
    avatar: '👨‍🔬',
    years: 6,
    title: 'Casino İncelemeci & Pragmatic Play Türkiye Uzmanı',
    handle: '@deniz_casinopro',
  },
  onur: {
    name: 'Onur Saraç',
    bio: 'Dokuz yıllık dijital SEO deneyiminin beş yılını casino ve iGaming sektörüne odaklayan teknik bir SEO uzmanı ve içerik editörüdür. Tüm Fruit Party makaleleri Onur tarafından doğruluk, SEO uyumu ve E-E-A-T kriterleri açısından incelenmektedir.',
    avatar: '🔍',
    years: 9,
    title: 'Teknik SEO Editör & E-E-A-T Uzmanı',
    handle: '@onursarac_seo',
  },
};

export default function ArticleLayout({ title, description, path, authorKey, editorKey = 'onur', children }) {
  const { t } = useLanguage();
  const author = authors[authorKey];
  const editor = authors[editorKey];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEOHead title={title} description={description} path={path} />

      <article className="max-w-4xl mx-auto px-4">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-fp-green transition-colors mb-8"
        >
          ← {t('articles.backToArticles')}
        </Link>

        {/* Article header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-fp-green via-fp-purple to-fp-gold bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          {/* Author info */}
          <div className="flex flex-wrap items-center gap-6 mt-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{author.avatar}</span>
              <div>
                <div className="text-sm text-gray-400">{t('articles.author')}</div>
                <div className="font-semibold text-white">{author.name}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{editor.avatar}</span>
              <div>
                <div className="text-sm text-gray-400">{t('articles.editor')}</div>
                <div className="font-semibold text-white">{editor.name}</div>
              </div>
            </div>
          </div>
        </header>

        {/* Article content */}
        <div className="prose prose-invert max-w-none
          [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-fp-green
          [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-fp-purple
          [&_p]:text-gray-300 [&_p]:leading-relaxed [&_p]:mb-4
          [&_ul]:space-y-2 [&_ul]:mb-6
          [&_li]:text-gray-300 [&_li]:pl-2
          [&_strong]:text-white
          [&_em]:text-fp-gold
        ">
          {children}
        </div>

        {/* Author bio card */}
        <div className="mt-16 glass rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <span className="text-5xl">{author.avatar}</span>
            <div>
              <h3 className="font-bold text-white text-lg mb-1">{author.name}</h3>
              <p className="text-sm text-fp-gold mb-2">{author.title} | {author.years} yıl deneyim | {author.handle}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{author.bio}</p>
            </div>
          </div>
        </div>

        {/* Related articles CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-fp-green to-fp-purple text-white font-bold hover:scale-105 transition-transform"
          >
            🍓 {t('articles.relatedArticles')}
          </Link>
        </div>
      </article>
    </div>
  );
}
