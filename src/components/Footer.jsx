import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const articleLinks = [
  { path: '/fruit-party-nasil-oynanir', label: 'Nasıl Oynanır?' },
  { path: '/fruit-party-taktikleri', label: 'Taktikler' },
  { path: '/fruit-party-free-spin', label: 'Free Spin Rehberi' },
  { path: '/fruit-party-rtp', label: 'RTP Analizi' },
  { path: '/meyve-oyunu-rehberi', label: 'Meyve Oyunu Rehber' },
  { path: '/fruit-party-cluster-pays', label: 'Cluster Pays & Tumble' },
  { path: '/fruit-party-pragmatic-play', label: 'Pragmatic Play Rehber' },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 mt-16">
      {/* Responsible gaming banner */}
      <div className="bg-gradient-to-r from-fp-red/10 to-fp-gold/10 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <div className="inline-flex items-center gap-2 text-fp-red font-bold text-lg mb-2">
            ⚠️ {t('responsible.title')}
          </div>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">{t('responsible.text')}</p>
          <div className="mt-3 inline-flex items-center gap-2 px-4 py-1 rounded-full border border-fp-red/30 text-fp-red text-sm font-bold">
            {t('responsible.age')}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              🍓 Fruit Party
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{t('footer.aboutText')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {[
                { path: '/', label: 'Demo' },
                { path: '/fruit-party', label: 'Fruit Party' },
                { path: '/casino-incelemeleri', label: t('nav.casinos') },
                { path: '/sss', label: t('nav.faq') },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-gray-400 text-sm hover:text-fp-green transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Articles */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">{t('footer.articles')}</h3>
            <ul className="space-y-2">
              {articleLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-gray-400 text-sm hover:text-fp-green transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">{t('footer.legal')}</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-1">{t('footer.disclaimer')}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{t('footer.disclaimerText')}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-1">{t('footer.responsible')}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{t('footer.responsibleText')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Links */}
        <div className="mt-10 pt-6 border-t border-white/5">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            <a href="https://bedavaslotoyunlarioyna1.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 underline hover:text-fp-green transition-colors">bedavaslotoyunlarioyna1.com</a>
            <a href="https://demoslotoyunlarioyna1.top/" target="_blank" rel="noopener noreferrer" className="text-gray-400 underline hover:text-fp-green transition-colors">demoslotoyunlarioyna1.top</a>
            <a href="https://anatoljhr.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 underline hover:text-fp-green transition-colors">anatoljhr.org</a>
            <a href="https://demoslotoyna.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 underline hover:text-fp-green transition-colors">demoslotoyna.org</a>
            <a href="https://www.biosimilars-congress.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 underline hover:text-fp-green transition-colors">biosimilars-congress.com</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-6 border-t border-white/5 text-center text-gray-600 text-xs">
          <p>Fruit Party Demo | Pragmatic Play</p>
          <p className="mt-1">Bu site yalnızca bilgi ve eğlence amaçlıdır.</p>
        </div>
      </div>
    </footer>
  );
}
