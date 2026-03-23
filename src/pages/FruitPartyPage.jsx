import SEOHead from '../components/SEOHead';
import FruitPartySlot from '../components/FruitPartySlot';
import MultiplierDisplay from '../components/MultiplierDisplay';

export default function FruitPartyPage() {
  return (
    <div className="pt-20">
      <SEOHead
        title="Fruit Party Demo Oyna | Meyve Oyunu Ücretsiz 7x7 Cluster Slot"
        description="Fruit Party demo slot oyununu ücretsiz deneyin. 7x7 Cluster Pays grid, Tumble mekaniği ve rastgele çarpan sistemi ile meyve oyunu deneyimi."
        path="/fruit-party"
      />
      <FruitPartySlot />
      <MultiplierDisplay />
    </div>
  );
}
