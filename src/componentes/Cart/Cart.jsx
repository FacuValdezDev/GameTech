import React from "react";
import { AiOutlineClose } from "react-icons/ai";
const Cart = (cart, setCart) => {
  return (
    <div>
      <div className="cartContainer">
        {cart.length === 0 && (
          <div className="emptyCart">
            <h2 className="empty"></h2>
          </div>
        )}
        <div className="cartContant">
          {cart.map((curElm) => {
            return (
              <div className="cardItem" key={curElm.id}>
                <div className="cartImg">
                  <img src={curElm.img} alt={curElm.name} />
                </div>
                <div className="cartDetail">
                  <h4>{curElm.category}</h4>
                  <h3>{curElm.name}</h3>
                  <p>{curElm.price}</p>
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
