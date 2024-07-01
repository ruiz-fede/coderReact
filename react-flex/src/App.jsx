
import { useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const isEmptyCart = cartItems.length === 0;

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer message="Tenemos lo último en ...." />
    </div>
  );
};

export default App;

