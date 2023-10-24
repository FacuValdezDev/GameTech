import React, { useState } from "react";
import NavBar from "./componentes/NavBar/NavBar";
import Footer from "./componentes/Footer/Footer";
import Rout from "./componentes/Rout/Rout";
import ItemDetail from "./componentes/ItemDetail/ItemDetail";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  const [product, setProduct] = useState(ItemDetail);
  const searchbtn = (product) => {};
  return (
    <div>
      <BrowserRouter>
        <NavBar searchbtn={searchbtn} />
        <Rout product={product} setProduct={setProduct} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
