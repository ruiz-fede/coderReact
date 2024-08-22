import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import ItemList from './ItemList';
import Loader from '../Loader/Loader';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let productsQuery;

        if (categoryId) {
          productsQuery = query(
            collection(db, 'products'),
            where('category', '==', categoryId)
          );
        } else {
          productsQuery = collection(db, 'products');
        }

        const querySnapshot = await getDocs(productsQuery).catch(error => console.log(error));
        const productsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setProducts(productsList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return loading ? <Loader /> : <ItemList products={products} />;
};

export default ItemListContainer;

