import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import ItemDetail from './ItemDetail';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true); // Start loading
      try {
        const productRef = collection(db, 'products');
        const productDoc = doc(db, 'products', productId);
        const querySnapshot = await getDoc(productDoc);
        console.log('productId:', productId);
        console.log(querySnapshot);
        if (querySnapshot.exists()) {
          setProduct(querySnapshot.data());
        } else {
          console.log('Product not found');
          setProduct(null);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setProduct(null);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchProduct();
  }, [productId]);

  return loading ? <Loader /> : product ? <ItemDetail product={product} /> : <p>Producto no encontrado</p>;
};

export default ItemDetailContainer;

