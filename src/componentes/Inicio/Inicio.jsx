import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import HomeProduct from "../HomeProduct/HomeProduct";

import "../HomeProduct/HomeProduct.css";
import "./Inicio.css";

const Home = () => {
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
      <div className="typeCategory">
        <div className="typeContainer">
          <div className="typeBox">
            <div className="typeImg">
              <img src="src\assets\img\ryzen7-bg.png" alt="cpu" />
            </div>
            <div className="numType">
              <p>Procesadores</p>
            </div>
          </div>
          <div className="typeBox">
            <div className="typeImg">
              <img src="src\assets\img\ryzen7-bg.png" alt="gpu" />
            </div>
            <div className="numType">
              <p>Placas de video</p>
            </div>
          </div>
          <div className="typeBox">
            <div className="typeImg">
              <img src="src\assets\img\ryzen7-bg.png" alt="motherboards" />
            </div>
            <div className="numType">
              <p>Motherboards</p>
            </div>
          </div>
          <div className="typeBox">
            <div className="typeImg">
              <img src="src\assets\img\ryzen7-bg.png" alt="rams" />
            </div>
            <div className="numType">
              <p>Memoria Ram</p>
            </div>
          </div>
          <div className="typeBox">
            <div className="typeImg">
              <img src="src\assets\img\ryzen7-bg.png" alt="disk" />
            </div>
            <div className="numType">
              <p>Almacenamiento</p>
            </div>
          </div>
        </div>
      </div>
      <div className="outlet">
        <div className="outContainer">
          {HomeProduct.map((curElm) => {
            return (
              <div className="outletBox" key={curElm.id}>
                <div className="outletImg">
                  <img src={curElm.img} alt={curElm.name} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
