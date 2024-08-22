import { collection, getDocs , deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const removeDuplicateProducts = async () => {
    const productsCollection = collection(db, 'products');
  
    const querySnapshot = await getDocs(productsCollection);
    const seenIds = new Set();
  
    for (const docSnapshot of querySnapshot.docs) {
      const product = docSnapshot.data();
      const docRef = docSnapshot.ref;
  
      if (seenIds.has(product.id)) {
        await deleteDoc(docRef);
        console.log(`Duplicate product with id ${product.id} has been removed.`);
      } else {
        seenIds.add(product.id);
      }
    }
  };

  export default removeDuplicateProducts;