import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase/firebaseConfig';
import ItemList from '../ItemListContainer/ItemList';
import Loader from '../Loader/Loader';

const CategoryContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsRef = ref(db, 'products');
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      const filteredProducts = Object.values(data).filter(product => product.category === categoryId);
      setProducts(filteredProducts);
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <div>
      {loading ? <Loader /> : <ItemList products={products} />}
    </div>
  );
};

export default CategoryContainer;