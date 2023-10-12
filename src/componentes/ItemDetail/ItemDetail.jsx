import propTypes from "prop-types";
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
