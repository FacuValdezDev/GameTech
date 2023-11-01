import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Cart.css";
const Cart = ({ cart, setCart }) => {
  return (
    <div>
      <div className="cartContainer">
        {cart.length === 0 && (
          <div className="emptyCart">
            <h2 className="empty">El carrito esta vacio</h2>
            <Link to="/category/products" className="emptyCartbtn">
              Comprar Más
            </Link>
            <button>Vaciar Carrito</button>
          </div>
        )}
        <div className="cartContant">
          {cart.map((curElm) => {
            return (
              <div className="cartItem" key={curElm.id}>
                <div className="cartImg">
                  <img src={curElm.img} alt={curElm.name} />
                </div>
                <div className="cartDetail">
                  <h4>{curElm.category}</h4>
                  <h3>{curElm.name}</h3>
                  <p>${curElm.price}</p>
                  <div className="qty">
                    <button className="incqty">+</button>
                    <h4>sub total_: ${curElm.price * curElm.qty}</h4>
                  </div>
                  <button>
                    <AiOutlineClose />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
