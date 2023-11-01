import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Inicio/Inicio";
import ItemList from "../ItemList/ItemList";
import Cart from "../Cart/Cart";
const Rout = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  cart,
  setCart,
  addtocart,
}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              product={product}
              setProduct={setProduct}
              detail={detail}
              view={view}
              close={close}
              setClose={setClose}
              addtocart={addtocart}
            />
          }
        />
        <Route
          path="/category/products"
          element={
            <ItemList
              product={product}
              setProduct={setProduct}
              detail={detail}
              view={view}
              close={close}
              setClose={setClose}
              addtocart={addtocart}
            />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </div>
  );
};

export default Rout;
