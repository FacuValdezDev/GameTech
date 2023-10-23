/* import propTypes from "prop-types";
import { useEffect, useState } from "react";

const ItemDetail = ({ item, isLoading }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const itemDrf = doc(db, "items", "29cGn71lReCaZvT08jlN");

    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItem({
          id: snapshot.id,
          ...snapshot.data(),
        });
      }
    });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!item) {
    return <h2>Product not found</h2>;
  }
  return (
    <div>
      <img src={item.imgurl} alt="" />
      <h1>{item.name}</h1>
      <p>{item.price}</p>
      <p>{item.category}</p>
    </div>
  );
};

ItemDetail.propTypes = {
  item: propTypes.object.isRequired,
  isLoading: propTypes.bool,
};

export default ItemDetail;
 */
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
    category: "Cpu",
    img: "../src/assets/img/ryzen7.png",
  },
  {
    id: "4",
    name: "Ryzen 3 3200G 4.6GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
    price: "1400",
    category: "Cpu",
    img: "../src/assets/img/ryzen7.png",
  },
  {
    id: "5",
    name: "Ryzen 3 3200G 4.6GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
    price: "1400",
    category: "Cpu",
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
