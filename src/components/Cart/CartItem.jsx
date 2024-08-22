const CartItem = ({ item }) => {
  const totalPrice = item.price * item.quantity;
    return (
      <div>
        <p>{item.name} - {item.quantity} unidades</p>
        <p>Precio por unidad: ${item.price}</p>
        <p>Total: ${totalPrice}</p>
      </div>
    );
  };
  
  export default CartItem;