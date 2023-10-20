import React from "react";
import NavBar from "./componentes/NavBar/NavBar";
import Footer from "./componentes/Footer/Footer";
import Rout from "./componentes/Rout/Rout";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Rout />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
