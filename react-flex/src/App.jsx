import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CategoryContainer from './components/CategoryContainer';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const isEmptyCart = cartItems.length === 0;

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer message="Tenemos lo último en Celulares" />} />
          <Route path="/category/:categoryId" element={<CategoryContainer />} />
          <Route path="/product/:productId" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
