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

const firebaseConfig = {
  apiKey: "AIzaSyCTocWRVwAAHlsKqSvESJqrpXZ1bbsUKvM",
  authDomain: "coder-react-3254b.firebaseapp.com",
  projectId: "coder-react-3254b",
  storageBucket: "coder-react-3254b.appspot.com",
  messagingSenderId: "233155136734",
  appId: "1:233155136734:web:f20e182fb7c9008e4c864f",
  measurementId: "G-LGVLXJ9WXB",
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
