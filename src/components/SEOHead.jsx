import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n/LanguageContext';

export default function SEOHead({ title, description, path = '/', noIndex = false }) {
  const { lang } = useLanguage();
  const baseUrl = 'https://fruitpartysitesi.com';
  const fullUrl = `${baseUrl}${path}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <link rel="canonical" href={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang === 'tr' ? 'tr_TR' : 'en_US'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
