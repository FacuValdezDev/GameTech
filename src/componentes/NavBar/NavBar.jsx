import React from "react";
import { FaTruckMoving } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import "./NavBar.css";

const NavBar = ({ searchbtn }) => {
  const [search, setSearch] = useState();
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <div>
      <div className="free">
        <div className="icon">
          <FaTruckMoving />
        </div>
        <p>Envio GRATIS si tu compra supera los $30.000.</p>
      </div>
      <div className="mainHeader">
        <div className="navContainer">
          <div className="logo">
            <img src="../src/assets/img/gametech.png" alt="logo" />
          </div>
          <div className="searchBox">
            <input
              type="text"
              value={search}
              placeholder="Encuentre su producto..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => searchbtn(search)}>Buscar</button>
          </div>
          <div className="shopIcons">
            {isAuthenticated && (
              <div className="account">
                <BiUser className="userIcon" />
                <p>Hola,{user.name}</p>
              </div>
            )}

            <div className="secondIcon">
              <Link to="/" className="link">
                <AiOutlineHeart />
              </Link>
              <Link to="/cart" className="link">
                <BsBagCheck />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="linkContainer">
          <div className="nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/category/products" className="link">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/category/about" className="link">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/category/contact" className="link">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="auth">
            {isAuthenticated ? (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                <CiLogout />
              </button>
            ) : (
              <button onClick={() => loginWithRedirect()}>
                <CiLogin />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
