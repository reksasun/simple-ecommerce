import { useParams } from 'react-router-dom';
import products from '../data/products.json';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();

  if (!product) return <p>Produk tidak ditemukan.</p>;

  return (
    <div className="detail">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>Rp {product.price.toLocaleString()}</p>
      <p>{product.description}</p>
      <button onClick={() => addItem(product)}>
        Tambah ke Keranjang
      </button>
    </div>
  );
}
