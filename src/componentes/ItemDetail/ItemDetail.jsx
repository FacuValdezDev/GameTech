const ItemDetail = [
  {
    id: "1",
    name: "Ryzen 3 3200G 4.6GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
    price: "1400",
    category: "Cpu",
    img: "../src/assets/img/ryzen7.png",
  },
  {
    id: "2",
    name: "Ryzen 3 3200G 4.6GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
    price: "1400",
    category: "Cpu",
    img: "../src/assets/img/ryzen7.png",
  },
  {
    id: "3",
    name: "Ryzen 3 3200G 4.6GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
    price: "1400",
    category: "Gpu",
    img: "../src/assets/img/ryzen7.png",
  },
  {
    id: "4",
    name: "Ryzen 3 3200G 4.6GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
    price: "1400",
    category: "Gpu",
    img: "../src/assets/img/ryzen7.png",
  },
  {
    id: "5",
    name: "Ryzen 3 3200G 4.6GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
    price: "1400",
    category: "Gpu",
    img: "../src/assets/img/ryzen7.png",
  },
  {
    id: "6",
    name: "Ryzen 3 3200G 4.6GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
    price: "1400",
    category: "Cpu",
    img: "../src/assets/img/ryzen7.png",
  },
  {
    id: "7",
    name: "Ryzen 3 3200G 4.6GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
    price: "1400",
    category: "Cpu",
    img: "../src/assets/img/ryzen7.png",
  },
  {
    id: "8",
    name: "Ryzen 3 3200G 4.6GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
    price: "1400",
    category: "Cpu",
    img: "../src/assets/img/ryzen7.png",
  },
  {
    id: "9",
    name: "Ryzen 3 3200G 4.6GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
    price: "1400",
    category: "Cpu",
    img: "../src/assets/img/ryzen7.png",
  },
  {
    id: "10",
    name: "Ryzen 3 3200G 4.6GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
    price: "1400",
    category: "Cpu",
    img: "../src/assets/img/ryzen7.png",
  },
  {
    id: "11",
    name: "Ryzen 3 3200G 4.6GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
    price: "1400",
    category: "Cpu",
    img: "../src/assets/img/ryzen7.png",
  },
  {
    id: "12",
    name: "Ryzen 3 3200G 4.6GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
    price: "1400",
    category: "Cpu",
    img: "../src/assets/img/ryzen7.png",
  },
  {
    id: "13",
    name: "Ryzen 3 3200G 4.6GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
    price: "1400",
    category: "Cpu",
    img: "../src/assets/img/ryzen7.png",
  },
  {
    id: "14",
    name: "Ryzen 3 3200G 4.6GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
    price: "1400",
    category: "Cpu",
    img: "../src/assets/img/ryzen7.png",
  },
  {
    id: "15",
    name: "Ryzen 3 3200G 4.6GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
    price: "1400",
    category: "Cpu",
    img: "../src/assets/img/ryzen7.png",
  },
];

export default ItemDetail;

/* 
import React from "react";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = () => {
  const [item, setItem] = useState(null);
  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", "29cGn71lReCaZvT08jlN");

    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItem(snapshot.data());
      }
    });
  }, []);
  return <div>ItemDetail</div>;
};

export default ItemDetail;
 */
