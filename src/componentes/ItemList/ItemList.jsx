import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus, BsEye } from "react-icons/bs";

import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemList.css";
const ItemList = ({ product, setProduct }) => {
  const filtterproduct = (product) => {
    const update = ItemDetail.filter((x) => {
      return x.category === product;
    });
    setProduct(update);
  };
  const AllProducts = () => {
    setProduct(ItemDetail);
  };
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
                <li onClick={() => AllProducts()}>Todos los productos</li>
                <li onClick={() => filtterproduct("Cpu")}>Procesadores</li>
                <li onClick={() => filtterproduct("Gpu")}>Placas de video</li>
                <li onClick={() => filtterproduct("Motherboards")}>
                  Motherboards
                </li>
                <li onClick={() => filtterproduct("Memory")}>Memorias Ram</li>
                <li onClick={() => filtterproduct("Storage")}>
                  Almacenamiento
                </li>
              </ul>
            </div>
          </div>
          <div className="productBox">
            <div className="productContant">
              {product.map((curElm) => {
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
