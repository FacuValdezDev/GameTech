/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo2g22KLNgJZ1P6Pia9h46HSUQjk6fKMA",
  authDomain: "e-commerse-react-a8cb8.firebaseapp.com",
  projectId: "e-commerse-react-a8cb8",
  storageBucket: "e-commerse-react-a8cb8.appspot.com",
  messagingSenderId: "737301912751",
  appId: "1:737301912751:web:40fb8bf8c2c42add31485a",
  measurementId: "G-X0JCPXBTKD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
 */
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  where,
  query,
  addDoc,
  orderBy,
} from "firebase/firestore";

import Toast from "toastify-js";

const firebaseConfig = {
  apiKey: "AIzaSyAo2g22KLNgJZ1P6Pia9h46HSUQjk6fKMA",
  authDomain: "e-commerse-react-a8cb8.firebaseapp.com",
  projectId: "e-commerse-react-a8cb8",
  storageBucket: "e-commerse-react-a8cb8.appspot.com",
  messagingSenderId: "737301912751",
  appId: "1:737301912751:web:40fb8bf8c2c42add31485a",
  measurementId: "G-X0JCPXBTKD",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getItem(id) {
  try {
    const docRef = doc(db, "products", id);
    const snapshot = await getDoc(docRef);
    const docData = snapshot.data();
    docData.id = snapshot.id;
    return docData;
  } catch (error) {
    Toast.error(`Error getting item`);
    throw error;
  }
}

export async function getAllItems() {
  try {
    const productsCollection = collection(db, "products");

    const q = query(productsCollection, orderBy("price"));

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    Toast.error(`Error getting items`);
  }
}

export async function getCategoryItems(idCat) {
  try {
    const productsCollectionRef = collection(db, "products");
    const querySnapshot = await getDocs(
      query(productsCollectionRef, where("category", "==", idCat)),
    );
    return querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    Toast.error(`Error getting items`);
  }
}

export async function createOrder(order) {
  const ordersCollection = collection(db, "orders");

  const orderDoc = await addDoc(ordersCollection, order);
  return orderDoc.id;
}

export async function exportData() {
  const productsCollectionRef = collection(db, "products");

  const products = [
    {
      id: "1",
      name: "Ryzen 3 3200G 4.6GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
      price: "1400",
      category: "Cpu",
      imgurl: "../src/assets/img/ryzen7.png",
    },
    {
      id: "2",
      name: "Ryzen 3 4100 - No Cooler OEM",
      price: "1400",
      category: "Cpu",
      imgurl: "../src/assets/img/ryzen7.png",
    },
    {
      id: "3",
      name: "Ryzen 5 3600 4.2GHz Turbo AM4 Wraith Stealth Cooler",
      price: "1400",
      category: "Cpu",
      imgurl: "../src/assets/img/ryzen7.png",
    },
    {
      id: "4",
      name: "Ryzen 5 5600x 4.6GHZ Turbo + Wraith Stealth Cooler",
      price: "1400",
      category: "Cpu",
      imgurl: "../src/assets/img/ryzen7.png",
    },
    {
      id: "5",
      name: "Ryzen 7 5700G 4.6GHz Turbo + Wraith Stealth Cooler",
      price: "1400",
      category: "Cpu",
      imgurl: "../src/assets/img/ryzen7.png",
    },
    {
      id: "6",
      name: "Ryzen 7 5700X 4.6GHz Turbo AM4 - No Cooler",
      price: "1400",
      category: "Cpu",
      imgurl: "../src/assets/img/ryzen7.png",
    },
    {
      id: "7",
      name: "Ryzen 7 7700 5.3GHz Turbo AM5",
      price: "1400",
      category: "Cpu",
      imgurl: "../src/assets/img/ryzen7.png",
    },
    {
      id: "8",
      name: "Ryzen 7 5700G",
      price: "1400",
      category: "Cpu",
      imgurl: "../src/assets/img/ryzen7.png",
    },
    {
      id: "9",
      name: "I7 10700",
      price: "1500",
      category: "Cpu",
      imgurl: "../src/assets/img/ryzen7.png",
    },
    {
      id: "10",
      name: "RTX 3080",
      price: "2000",
      category: "Gpu",
      imgurl: "../src/assets/img/ryzen7.png",
    },
    {
      id: "11",
      name: "RX 6700 XT",
      price: "1800",
      category: "Gpu",
      imgurl: "../src/assets/img/ryzen7.png",
    },
    {
      id: "12",
      name: "X570 ASUS STRIX",
      price: "1000",
      category: "Motherboard",
      imgurl: "../src/assets/img/ryzen7.png",
    },
    {
      id: "13",
      name: "A520 ASUS STRIX",
      price: "900",
      category: "Motherboard",
      imgurl: "../src/assets/img/ryzen7.png",
    },
    {
      id: "14",
      name: "16GB DDR4 HYPERX",
      price: "500",
      category: "Memory-ram",
      imgurl: "../src/assets/img/ryzen7.png",
    },
    {
      id: "15",
      name: "Nvme2g 480GB",
      price: "300",
      category: "Disk",
      imgurl: "../src/assets/img/ryzen7.png",
    },
  ];

  for (let item of products) {
    item.order = item.id;
    delete item.id;
    addDoc(productsCollectionRef, item).then();
  }
}
