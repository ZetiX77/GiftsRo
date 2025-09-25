import React from "react";
import "./Header.css";
import { GoPaperAirplane } from "react-icons/go";
import logo from "../../assets/logo.png";

const Header = ({ onScrollToPromo, onScrollToProduct , onScrollToAdmins}) => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <div className="logo-icon">
            <img className="logo-img" src={logo} alt="logo" />
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
        <button onClick={onScrollToPromo}>О канале</button>
        <button onClick={onScrollToProduct}>Розыгрыши</button>
        <button onClick={onScrollToAdmins}>Админы</button>
        <a href="#">Отзывы</a>
      </nav>
    </header>
  );
};

export default Header;
