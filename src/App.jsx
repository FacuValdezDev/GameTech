import React, { useState } from "react";
import NavBar from "./componentes/NavBar/NavBar";
import Footer from "./componentes/Footer/Footer";
import Rout from "./componentes/Rout/Rout";
import ItemDetail from "./componentes/ItemDetail/ItemDetail";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  const [product, setProduct] = useState(ItemDetail);
  //detail
  const [detail, setDetail] = useState([]);
  //filter
  const searchbtn = (product) => {
    const change = ItemDetail.filter((x) => {
      return x.category === product;
    });
    setProduct(change);
  };

  //PRODUCT DETAIL
  const view = (product) => {
    setDetail([{ product }]);
  };
  return (
    <div>
      <BrowserRouter>
        <NavBar searchbtn={searchbtn} />
        <Rout
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
        />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
