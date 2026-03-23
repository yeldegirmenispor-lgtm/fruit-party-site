import ArticleLayout from '../../components/ArticleLayout';

export default function Article6ClusterPays() {
  return (
    <ArticleLayout
      title="Fruit Party Cluster Pays ve Tumble Sistemi"
      description="Fruit Party cluster pays nasıl çalışır? Meyve oyununda tumble cascade sistemi, cluster büyüklüğü ve ödeme tablosu teknik açıklama."
      path="/fruit-party-cluster-pays"
      authorKey="kaan"
    >
      <h2>Cluster Pays (Küme Ödeme) Nedir?</h2>
      <p>
        Cluster Pays, slot oyunlarında sembollerin belirli payline'larda dizilmesi yerine birbirine yatay veya dikey olarak bağlı (komşu) <strong>8 veya daha fazla aynı sembolün</strong> oluşturduğu 'küme' üzerinden kazanç üreten bir mekanizmadır. Çapraz bağlantılar sayılmaz. Küme büyüklüğü arttıkça ödeme katsayısı da artar. Fruit Party'nin 7x7 gridindeki 49 hücre, büyük cluster oluşumu için ideal bir alan sunar.
      </p>

      <h2>Tumble (Çığ / Cascade) Sistemi — Detaylı Açıklama</h2>
      <ul>
        <li>1. Spin gerçekleşir, 7x7 = 49 hücre sembollerle dolar</li>
        <li>2. 8+ bağlantılı aynı sembol tespit edilirse cluster kazancı hesaplanır ve ödenir</li>
        <li>3. Kazanan semboller grid'den kaldırılır</li>
        <li>4. Yukarıdan yeni semboller düşer — bu 'Tumble' veya 'Cascade' adımıdır</li>
        <li>5. Yeni oluşan grid üzerinde tekrar cluster kontrolü yapılır</li>
        <li>6. Yeni kazanç varsa süreç tekrar başlar; yoksa spin tamamlanır</li>
        <li>7. Her Tumble aşamasında aktif çarpan sembolleri devam eder (free spinde silinmez)</li>
      </ul>

      <h2>Cluster Büyüklüğü ve Ödeme İlişkisi</h2>
      <p>
        Fruit Party'de cluster ne kadar büyük olursa ödeme katsayısı da o denli yüksektir. <strong>8 sembolik küçük cluster</strong> temel ödeme sağlar. <strong>12-15 sembolik orta cluster</strong> orta-yüksek ödeme getirir. <strong>16+ sembolik mega cluster</strong> en yüksek ödeme katsayılarını sunar. Grid'in tamamını kaplayan teorik maksimum cluster (49 sembol) teorik olarak mümkün olmakla birlikte pratikte son derece nadirdir.
      </p>

      <h2>Cluster Pays ve Payline Karşılaştırması</h2>
      <div className="glass rounded-xl p-4 my-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-4 py-2 text-left text-gray-400">Özellik</th>
              <th className="px-4 py-2 text-left text-fp-green">Cluster Pays (Fruit Party)</th>
              <th className="px-4 py-2 text-left text-gray-400">Payline (Standart)</th>
            </tr>
          </thead>
          <tbody className="text-gray-300 text-sm">
            <tr className="border-b border-white/5">
              <td className="px-4 py-2">Kazanç Sistemi</td>
              <td className="px-4 py-2 text-fp-green">8+ bitişik sembol</td>
              <td className="px-4 py-2">Çizgi üzerinde sıralı</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="px-4 py-2">Tumble</td>
              <td className="px-4 py-2 text-fp-green">Evet (zincir kazanç)</td>
              <td className="px-4 py-2">Genellikle yok</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="px-4 py-2">Grid Boyutu</td>
              <td className="px-4 py-2 text-fp-green">7x7 (49 hücre)</td>
              <td className="px-4 py-2">5x3 (15 hücre)</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="px-4 py-2">Çarpan</td>
              <td className="px-4 py-2 text-fp-green">x2-x16 rastgele</td>
              <td className="px-4 py-2">Nadiren</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Volatilite</td>
              <td className="px-4 py-2 text-fp-green">Genellikle yüksek</td>
              <td className="px-4 py-2">Değişken</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Cluster Pays Stratejisi: Gözlem Yöntemi</h2>
      <p>
        Demo modda birkaç yüz spin oynayarak şunları gözlemleyin: Ortalama kaç spinde 8+ cluster oluşuyor? Tumble zincirleri genellikle kaç aşamada tamamlanıyor? Çarpan sembolleri bir spinde kaç kez görünüyor? x8 veya x16 çarpan ne sıklıkla beliriyor? Bu gözlemler gerçek para oyunlarında beklenti yönetimini doğrudan geliştirir.
      </p>
    </ArticleLayout>
  );
}
