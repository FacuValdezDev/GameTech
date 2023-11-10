import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineCloseCircle } from "react-icons/ai";
import { BsCartPlus, BsEye } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllItems, getCategoryItems } from "../../Services/firebase";
import "./ItemList.css";

const ItemList = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  addtocart,
}) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllItems();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, [setProduct]);

  const filtterproduct = async (productCategory) => {
    try {
      const data = await getCategoryItems(productCategory);
      setProduct(data);
    } catch (error) {
      console.error("Error filtering data:", error);
    }
  };

  const AllProducts = async () => {
    try {
      const data = await getAllItems();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching all data:", error);
    }
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
                    <img src={curElm.imgurl} alt={curElm.name} />
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

      <div className="products">
        <h2>Productos</h2>
        <p>Inicio &gt; Productos</p>

        <div className="productsContainer">
          <div className="filter">
            <div className="categories">
              <h3>Categorias</h3>
              <ul>
                <li onClick={() => AllProducts()}>Todos los productos</li>
                <li onClick={() => filtterproduct("Cpu")}>Procesadores</li>
                <li onClick={() => filtterproduct("Gpu")}>Placas de video</li>
                <li onClick={() => filtterproduct("Motherboard")}>
                  Motherboards
                </li>
                <li onClick={() => filtterproduct("Memory-ram")}>
                  Memorias Ram
                </li>
                <li onClick={() => filtterproduct("Disk")}>Almacenamiento</li>
              </ul>
            </div>
          </div>
          <div className="productBox">
            <div className="productContant">
              {loading ? (
                <p>Cargando...</p>
              ) : (
                product.map((curElm) => (
                  <div className="product" key={curElm.id}>
                    <div className="productImg">
                      <img src={curElm.imgurl} alt={curElm.name} />
                      <div className="productIcon">
                        {isAuthenticated ? (
                          <li onClick={() => addtocart(curElm)}>
                            <BsCartPlus />
                          </li>
                        ) : (
                          <li onClick={() => loginWithRedirect()}>
                            <BsCartPlus />
                          </li>
                        )}

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
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
