import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus, BsEye } from "react-icons/bs";

import "./ItemList.css";
const ItemList = () => {
  return (
    <div>
      <div className="products">
        <h2>Productos</h2>
        <p>Inicio . Productos</p>

        <div className="productsContainer">
          <div className="filter">
            <div className="categories">
              <h3>Categorias</h3>
              <ul>
                <li>Procesadores</li>
                <li>Placas de video</li>
                <li>Motherboards</li>
                <li>Memorias Ram</li>
                <li>Almacenamiento</li>
              </ul>
            </div>
          </div>
          <div className="productBox">
            <div className="productContant">
              {ItemDetail.map((curElm) => {
                return (
                  <>
                    <div className="product" key={curElm.id}>
                      <div className="productImg">
                        <img src={curElm.img} alt="" />
                        <div className="productIcon">
                          <li>
                            <BsCartPlus />
                          </li>
                          <li>
                            <BsEye />
                          </li>
                          <li>
                            <AiOutlineHeart />
                          </li>
                        </div>
                      </div>
                      <div className="productDetail">
                        <p>{curElm.category}</p>
                        <h3>{curElm.name}</h3>
                        <h4>${curElm.price}</h4>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
