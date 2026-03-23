import SEOHead from '../components/SEOHead';
import FAQ from '../components/FAQ';

export default function FAQPage() {
  return (
    <div className="pt-20 pb-16">
      <SEOHead
        title="Fruit Party SSS | Meyve Oyunu Sıkça Sorulan Sorular"
        description="Fruit Party hakkında sıkça sorulan sorular. RTP, Cluster Pays, Tumble, Free Spin, çarpan sistemi ve daha fazlası hakkında yanıtlar."
        path="/sss"
      />
      <FAQ />
    </div>
  );
}
