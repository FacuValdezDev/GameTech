import React from "react";
import NavBar from "./componentes/NavBar/NavBar";
import Rout from "./componentes/Rout/Rout";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Rout />
      </BrowserRouter>
    </div>
  );
}

export default App;
