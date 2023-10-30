import React from "react";
import { AiOutlineHeart, AiOutlineCloseCircle } from "react-icons/ai";
import { BsCartPlus, BsEye } from "react-icons/bs";

import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemList.css";
const ItemList = ({ product, setProduct, detail, view, close, setClose }) => {
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

      <div className="products">
        <h2>Productos</h2>
        <p>Inicio Productos</p>

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
                        <img src={curElm.img} alt={curElm.name} />
                        <div className="productIcon">
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
