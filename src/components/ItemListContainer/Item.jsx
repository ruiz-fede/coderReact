import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ product }) => {
  console.log(product);
  return (
    <div className="grid-item">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <p>{product.name}</p>
      </Link>
    </div>
  );
};

export default Item;