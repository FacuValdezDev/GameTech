import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Inicio/Inicio";
const Rout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Rout;
