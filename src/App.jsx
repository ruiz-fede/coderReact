import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../src/components/Cart/Cart';
import CheckoutForm from '../src/components/Checkout/CheckoutForm';
import CartProvider from '../src/contexts/CartContext';
import loadProducts from '../src/scripts/loadProducts';

function App() {
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/product/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

