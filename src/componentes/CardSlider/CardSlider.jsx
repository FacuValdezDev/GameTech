import React, { useState, useRef } from "react";
import { BsCartPlus, BsEye } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiFillLeftCircle,
  AiFillRightCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import "./CardSlider.css";
import HomeProduct from "../HomeProduct/HomeProduct";

const CardSlider = ({ detail, view, close, setClose }) => {
  const itemsToShow = 6;
  const items = HomeProduct;
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.length - itemsToShow,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < items.length - itemsToShow ? prevIndex + 1 : 0,
    );
  };

  return (
    <div className="outlet">
      <div>
        <h2 className="outTitle">ULTIMAS NOVEDADES</h2>
      </div>
      <div className="outContainer" ref={containerRef}>
        <AiFillLeftCircle className="sldLeft" onClick={handlePrevClick} />
        {items.slice(currentIndex, currentIndex + itemsToShow).map((curElm) => (
          <div className="outletBox" key={curElm.id}>
            <div className="outletImg">
              <img src={curElm.img} alt={curElm.name} />
              <div className="outIcon">
                <li>
                  <BsCartPlus />
                </li>
                <li onClick={() => view(curElm)}>
                  <BsEye />
                </li>
                <li>
                  <AiOutlineHeart />
                </li>
              </div>
            </div>
            <div className="outDetail">
              <p>{curElm.category}</p>
              <h3>{curElm.name}</h3>
              <h4>${curElm.price}</h4>
            </div>
          </div>
        ))}

        <AiFillRightCircle className="sldRigth" onClick={handleNextClick} />
        {close ? (
          <div className="modalDetail">
            <div className="modalContainer">
              <button onClick={() => setClose(false)} className="closeBtn">
                <AiOutlineCloseCircle />
              </button>
              {detail.map((curElm) => {
                return (
                  <div className="modalBox">
                    <div className="modalImg">
                      <img src={curElm.img} alt={curElm.name} />
                    </div>
                    <div className="extraDetail">
                      <h4>{curElm.category}</h4>
                      <h2>{curElm.name}</h2>
                      <h3>${curElm.price}</h3>
                      <button>Agregar al carrito</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CardSlider;
