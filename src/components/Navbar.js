import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { items } = useCart();
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart ({items.length})</Link>
    </nav>
  );
}
