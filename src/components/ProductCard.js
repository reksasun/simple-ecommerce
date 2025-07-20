import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Rp {product.price.toLocaleString()}</p>
      <Link to={`/product/${product.id}`}>
        <button>Detail</button>
      </Link>
    </div>
  );
}
