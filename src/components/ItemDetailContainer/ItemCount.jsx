import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increase = () => count < stock && setCount(count + 1);
  const decrease = () => count > 1 && setCount(count - 1);

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;