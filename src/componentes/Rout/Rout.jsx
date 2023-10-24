import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Inicio/Inicio";
import ItemList from "../ItemList/ItemList";
const Rout = ({ product, setProduct, detail, view }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/category/products"
          element={
            <ItemList
              product={product}
              setProduct={setProduct}
              detail={detail}
              view={view}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Rout;
