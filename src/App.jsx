import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FruitPartyPage from './pages/FruitPartyPage';
import CasinoReviews from './pages/CasinoReviews';
import FAQPage from './pages/FAQPage';
import Article1NasilOynanir from './pages/articles/Article1NasilOynanir';
import Article2Taktikler from './pages/articles/Article2Taktikler';
import Article3FreeSpin from './pages/articles/Article3FreeSpin';
import Article4RTP from './pages/articles/Article4RTP';
import Article5MeyveOyunu from './pages/articles/Article5MeyveOyunu';
import Article6ClusterPays from './pages/articles/Article6ClusterPays';
import Article7PragmaticPlay from './pages/articles/Article7PragmaticPlay';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/fruit-party" element={<FruitPartyPage />} />
                <Route path="/casino-incelemeleri" element={<CasinoReviews />} />
                <Route path="/sss" element={<FAQPage />} />
                <Route path="/fruit-party-nasil-oynanir" element={<Article1NasilOynanir />} />
                <Route path="/fruit-party-taktikleri" element={<Article2Taktikler />} />
                <Route path="/fruit-party-free-spin" element={<Article3FreeSpin />} />
                <Route path="/fruit-party-rtp" element={<Article4RTP />} />
                <Route path="/meyve-oyunu-rehberi" element={<Article5MeyveOyunu />} />
                <Route path="/fruit-party-cluster-pays" element={<Article6ClusterPays />} />
                <Route path="/fruit-party-pragmatic-play" element={<Article7PragmaticPlay />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
