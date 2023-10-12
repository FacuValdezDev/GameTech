import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "./Inicio.css";
const Inicio = () => {
  return (
    <div>
      <div className="mainBanner">
        <div className="mainContainer">
          <div className="mainDetail">
            <h2>Los mejores productos informaticos al mejor precio </h2>
            <Link to="/category/products" className="mainLink">
              Ver Productos
              <BsArrowRight />
            </Link>
          </div>
          <div className="imgContainer">
            <img src="src\assets\img\banner1.png" alt="computer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
