import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../../img/logosmall.png';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <div className='nav'>
        <img src={logo} alt="Logo" />
      
      <ul className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/category/Android">Android</Link>
        <Link to="/category/Iphone">Iphone</Link>
        <Link to="/cart">Cart</Link>
      </ul>
      <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;