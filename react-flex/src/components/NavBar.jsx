import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="">Products</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
