import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import img1 from '../img/SGS24U.png';
import img2 from '../img/GP8A.png';
import img3 from '../img/SGZF5.png';
import img4 from '../img/GP8.png';
import img5 from '../img/SGA155G.png';
import img6 from '../img/IP15PM.png';
import img7 from '../img/IP15P.png';
import img8 from '../img/IP14PM.png';
import img9 from '../img/IP14.png';

const products = [
  {name: "Samsung Galaxy S24 Ultra", price: 1050, stock: 10, category: "Android", image: img1},
  {name: "Google Pixel 8a", price: 499, stock: 8, category: "Android", image: img2 },
  {name: "Samsung Galaxy Z Fold 5", price: 1599, stock: 10, category: "Android", image: img3 },
  {name: "Google Pixel 8", price: 699, stock: 8, category: "Android", image: img4 },
  {name: "Samsung Galaxy A15 5G", price: 162, stock: 10, category: "Android", image: img5 },
  {name: "Iphone 15 Pro Max", price: 1199, stock: 8, category: "Iphone", image: img6 },
  {name: "Iphone 15 Pro", price: 999, stock: 10, category: "Iphone", image: img7 },
  {name: "Iphone 14 Pro Max", price: 699, stock: 8, category: "Iphone", image: img8 },
  {name: "Iphone 14", price: 699, stock: 8, category: "Iphone", image: img9 },
];

const loadImages = async () => {
  const productsCollection = collection(db, 'products');

  for (const product of products) {
    const q = query(productsCollection, where('name', '==', product.name));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const productDoc = querySnapshot.docs[0];
      const productData = productDoc.data();

      if (!productData.image || productData.image !== product.image) {
        const productRef = doc(db, 'products', productDoc.id);
        await updateDoc(productRef, { image: product.image });
        console.log(`Updated image for ${product.name}`);
      }
    } else {
      console.log(`Product ${product.name} not found in the database.`);
    }
  }
};

export default loadImages;