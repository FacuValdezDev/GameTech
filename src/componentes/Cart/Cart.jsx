import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Cart.css";
const Cart = ({ cart, setCart }) => {
  //aumentar qty
  const incqty = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exsit, qty: exsit.qty + 1 }
          : curElm;
      }),
    );
  };

  //bajar qty
  const decqty = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exsit, qty: exsit.qty - 1 }
          : curElm;
      }),
    );
  };

  //sacar producto
  const removeproduct = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    if (exsit.qty > 0) {
      setCart(
        cart.filter((x) => {
          return x.id !== product.id;
        }),
      );
    }
  };
  //total price
  const Totalprice = cart.reduce(
    (price, item) => price + item.qty * item.price,
    0,
  );
  return (
    <div>
      <div className="cartContainer">
        {cart.length === 0 && (
          <div className="emptyCart">
            <h2 className="empty">El carrito esta vacio</h2>
            <Link to="/category/products" className="emptyCartbtn">
              Comprar ahora
            </Link>
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
                  <div className="cartInfo">
                    <h4>{curElm.category}</h4>
                    <h3>{curElm.name}</h3>
                    <p>Precio: ${curElm.price}</p>
                    <div className="qty">
                      <button className="incqty" onClick={() => incqty(curElm)}>
                        +
                      </button>
                      <input type="text" value={curElm.qty} />
                      <button className="decqty" onClick={() => decqty(curElm)}>
                        -
                      </button>
                    </div>
                    <h4 className="subTotal">
                      Sub-total: ${curElm.price * curElm.qty}
                    </h4>
                  </div>
                  <div className="close">
                    <button>
                      <AiOutlineClose onClick={() => removeproduct(curElm)} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {cart.length > 0 && (
          <div>
            <h2 className="totalPrice">Precio Total: ${Totalprice}</h2>
            <button className="checkOut">Finalizar pedido</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
