import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Annadhatha Bazaar</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/sell">Sell</Link>
        <Link to="/buy">Buy</Link>
        <Link to="/market">Market</Link>
        <Link to="/cart"><FaShoppingCart /></Link>
        <Link to="/login" className="login-btn"><FaUser /> Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;