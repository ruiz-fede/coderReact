import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productsData = [
        { id: 1, name: 'Android 1', description: 'Descripción del Android 1', img: 'ruta_de_la_imagen_1' },
        { id: 2, name: 'Android 2', description: 'Descripción del Android 2', img: 'ruta_de_la_imagen_2' },
        { id: 3, name: 'Android 3', description: 'Descripción del Android 3', img: 'ruta_de_la_imagen_3' },
        { id: 4, name: 'Android 4', description: 'Descripción del Android 4', img: 'ruta_de_la_imagen_4' },
        { id: 5, name: 'Android 5', description: 'Descripción del Android 5', img: 'ruta_de_la_imagen_5' },
        { id: 6, name: 'Android 6', description: 'Descripción del Android 6', img: 'ruta_de_la_imagen_6' },
        { id: 7, name: 'Iphone 1', description: 'Descripción del Iphone 1', img: 'ruta_de_la_imagen_7' },
        { id: 8, name: 'Iphone 2', description: 'Descripción del Iphone 2', img: 'ruta_de_la_imagen_8' },
        { id: 9, name: 'Iphone 3', description: 'Descripción del Iphone 3', img: 'ruta_de_la_imagen_9' },
      ];
      const productData = productsData.find(product => product.id === parseInt(productId));
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProduct(productData);
    };

    fetchProduct();
  }, [productId]);

  return (
    <div className="item-detail-container">
      {product ? (
        <div>
          <img src={product.img} alt={product.name} className="product-image" />
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <button>Agregar al Carrito</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
