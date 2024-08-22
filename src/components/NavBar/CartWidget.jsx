import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <div>
      <span>🛒</span>
      {totalItems > 0 && <span>{totalItems}</span>}
    </div>
  );
};

export default CartWidget;