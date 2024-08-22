import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
  const { cart } = useContext(CartContext);

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <p>Carrito vacío</p>
      ) : (
        <>
          {cart.map(item => (
            <div className="cart-item" key={item.id}>
              <CartItem item={item} />
            </div>
          ))}
          <hr />
          <h3>Total del carrito: ${cartTotal.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
