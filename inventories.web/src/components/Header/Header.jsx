import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./../../data/image/Logo/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo">
            <img src={logo} alt="Logo" className="logo_img" />
          </div>

          <nav className="header__nav">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/">Товары</Link>
              </li>
              <li className="nav__item">
                <Link to="/stock">Склады</Link>
              </li>
              {/* <li className="nav__item">
                <Link to="/orders">Накладные</Link>
              </li> */}
              <li className="nav__item">
                <Link to="/warhouse">Местоположение</Link>
              </li>
              <li className="nav__item">
                <Link to="/customer">Поставщики</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr className="header__hr" />
    </header>
  );
};

export default Header;
