import products from '../data/products.json';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <div className="grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
