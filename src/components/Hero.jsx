import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fp-green/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fp-purple/20 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-fp-gold/10 rounded-full blur-[96px]" />
      </div>

      {/* Floating fruit decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['🍓', '🍇', '🍋', '🍊', '🍉', '🍏', '🍑', '🍒'].map((emoji, i) => (
          <span
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animation: `float ${3 + i % 3}s ease-in-out infinite alternate`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-fp-gold mb-8">
          <span>🎰</span>
          Pragmatic Play | 7x7 Grid | Cluster Pays
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4">
          <span className="bg-gradient-to-r from-fp-green via-fp-red to-fp-green bg-clip-text text-transparent">
            {t('hero.title')}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-fp-gold font-semibold mb-6">
          {t('hero.subtitle')}
        </p>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('hero.description')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#demo-slot"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-fp-green to-fp-red text-white font-bold text-lg shadow-lg hover:shadow-fp-green/30 hover:scale-105 transition-all duration-300"
          >
            🎰 {t('hero.playDemo')}
          </a>
          <Link
            to="/fruit-party-nasil-oynanir"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass text-white font-bold text-lg hover:bg-white/10 transition-all duration-300"
          >
            📖 {t('hero.learnMore')}
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { value: '96.47%', label: 'RTP' },
            { value: '7x7', label: 'Grid' },
            { value: '5,000x', label: 'Max Kazanc' },
            { value: 'x16', label: 'Max Carpan' },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-xl p-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-fp-gold to-fp-red bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          from { transform: translateY(0) rotate(0deg); }
          to { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
    </section>
  );
}
