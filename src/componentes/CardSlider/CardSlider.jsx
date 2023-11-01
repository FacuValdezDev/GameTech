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

const CardSlider = ({ detail, view, close, setClose, addtocart }) => {
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
    <>
      <div className="outlet">
        <div>
          <h2 className="outTitle">ULTIMAS NOVEDADES</h2>
        </div>

        <div className="outContainer" ref={containerRef}>
          <AiFillLeftCircle className="sldLeft" onClick={handlePrevClick} />

          {items
            .slice(currentIndex, currentIndex + itemsToShow)
            .map((curElm) => (
              <div className="outletBox" key={curElm.id}>
                <div className="outletImg">
                  <img src={curElm.img} alt={curElm.name} />
                  <div className="outIcon">
                    <li onClick={() => addtocart(curElm)}>
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

                <div className="outDetail" key={curElm.id}>
                  <p>{curElm.category}</p>
                  <h3>{curElm.name}</h3>
                  <h4>${curElm.price}</h4>
                </div>
              </div>
            ))}

          <AiFillRightCircle className="sldRigth" onClick={handleNextClick} />
        </div>
      </div>
    </>
  );
};

export default CardSlider;
