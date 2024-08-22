import { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../../contexts/CartContext';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);

  const onAdd = (quantity) => {
    addToCart(product, quantity);
    setAddedToCart(true);
  };

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>$ {product.price}</p>
      {addedToCart ? <p>Producto agregado al carrito</p> : <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />}
    </div>
  );
};

export default ItemDetail;