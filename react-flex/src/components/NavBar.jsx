import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/Android">Android</Link></li>
        <li><Link to="/category/Iphone">Iphone</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
