import React from "react";
import "./Header.css";
import { GoPaperAirplane } from 'react-icons/go';
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <div className="logo-icon">
            <img className="logo-img" src={logo} href="#"/>
          </div>
          <div className="logo-text">
            <span className="logo-green">Gifts</span>
            <span className="logo-black">Ro</span>
          </div>
        </div>
        <button className="login-btn">
          <GoPaperAirplane className="user-icon" />
          Подпишись на нас
        </button>
      </div>
      <nav className="navbar">
        <a href="#">О канале</a>
        <a href="#">Розыгрыши</a>
        <a href="#">Админы</a>
        <a href="#">Отзывы</a>
      </nav>
    </header>
  );
};

export default Header;
