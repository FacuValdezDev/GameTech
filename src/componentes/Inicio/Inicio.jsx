import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { BsCartPlus } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import {
  AiFillLeftCircle,
  AiFillRightCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";

import HomeProduct from "../HomeProduct/HomeProduct";
import CardSlider from "../CardSlider/CardSlider";

import "../HomeProduct/HomeProduct.css";
import "./Inicio.css";

const Home = ({ detail, view, close, setClose, addtocart }) => {
  return (
    <div>
      {close ? (
        <div className="modalDetail">
          <div className="modalContainer">
            <button onClick={() => setClose(false)} className="closeBtn">
              <AiOutlineCloseCircle />
            </button>
            {detail.map((curElm, index) => {
              return (
                <div className="modalBox" key={index}>
                  <div className="modalImg">
                    <img src={curElm.img} alt={curElm.name} />
                  </div>
                  <div className="extraDetail">
                    <h4>{curElm.category}</h4>
                    <h2>{curElm.name}</h2>
                    <h3>${curElm.price}</h3>
                    <button onClick={() => addtocart(curElm)}>
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
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
      <div>
        <CardSlider
          view={view}
          detail={detail}
          close={close}
          setClose={setClose}
          addtocart={addtocart}
        />
      </div>
    </div>
  );
};

export default Home;
