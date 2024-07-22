import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CategoryContainer.css';

const CategoryContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = [
        { id: 1, name: 'Android 1', category: 'Android', img: 'ruta_de_la_imagen_1' },
        { id: 2, name: 'Android 2', category: 'Android', img: 'ruta_de_la_imagen_2' },
        { id: 3, name: 'Android 3', category: 'Android', img: 'ruta_de_la_imagen_3' },
        { id: 4, name: 'Android 4', category: 'Android', img: 'ruta_de_la_imagen_4' },
        { id: 5, name: 'Android 5', category: 'Android', img: 'ruta_de_la_imagen_5' },
        { id: 6, name: 'Android 6', category: 'Android', img: 'ruta_de_la_imagen_6' },
        { id: 7, name: 'Iphone 1', category: 'Iphone', img: 'ruta_de_la_imagen_7' },
        { id: 8, name: 'Iphone 2', category: 'Iphone', img: 'ruta_de_la_imagen_8' },
        { id: 9, name: 'Iphone 3', category: 'Iphone', img: 'ruta_de_la_imagen_9' },
      ];
      const filteredProducts = productsData.filter(product => product.category === categoryId);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProducts(filteredProducts);
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="category-container">
      <h1>Productos en la categoría: {categoryId}</h1>
      <div className="grid-container">
        {products.map(product => (
          <div key={product.id} className="grid-item">
            <Link to={`/product/${product.id}`}>
              <img src={product.img} alt={product.name} />
              <p>{product.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryContainer;
