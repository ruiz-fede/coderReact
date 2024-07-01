
const CartWidget = ({ isEmpty }) => {
  return (
    <div className="cart-widget">
      <span className="cart-icon">🛒</span>
      {isEmpty ? <span>Empty</span> : <span>Items</span>}
    </div>
  );
};

export default CartWidget;
