import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="about">
          <div className="logo">
            <img src="src\assets\img\gametech.png" alt="gametech" />
          </div>
          <div className="footerDetail">
            <p>
              Somos GameTech, el lugar donde podrás conseguir lo más nuevo al
              mejor precio
            </p>
            <div className="socialIcons">
              <a href="link-de-facebook">
                <BsFacebook />
              </a>
              <a href="link-de-instagram">
                <BsInstagram />
              </a>
              <a href="link-de-linkedin">
                <BsLinkedin />
              </a>
              <a href="link-de-twitter">
                <BsTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <div className="rightsReserved">© 2023 Derechos Reservados</div>
          <div className="contact">Contacto: gametech@info.com</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
