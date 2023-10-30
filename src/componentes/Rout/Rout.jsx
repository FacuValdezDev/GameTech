import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Inicio/Inicio";
import ItemList from "../ItemList/ItemList";
const Rout = ({ product, setProduct, detail, view, close, setClose }) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              detail={detail}
              view={view}
              close={close}
              setClose={setClose}
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
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Rout;
