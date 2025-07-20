import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { items, removeItem, clearCart, total } = useCart();

  if (items.length === 0) return <p>Keranjang kosong.</p>;

  return (
    <div className="cart">
      {items.map(i => (
        <div key={i.id} className="cart-item">
          <img src={i.image} alt={i.name} />
          <div>
            <h3>{i.name}</h3>
            <p>{i.qty} × Rp {i.price.toLocaleString()}</p>
            <p>Subtotal: Rp {(i.price*i.qty).toLocaleString()}</p>
            <button onClick={() => removeItem(i.id)}>Hapus</button>
          </div>
        </div>
      ))}
      <h2>Total: Rp {total.toLocaleString()}</h2>
      <button onClick={clearCart}>Checkout</button>
      <p>(Simulasi: keranjang akan kosong setelah klik)</p>
    </div>
  );
}
