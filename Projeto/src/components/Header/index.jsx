import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <nav>
      <span className="header__title">Blog Cetic</span>
      <div className="header__links">
        <a href="#">Home</a>
        <a href="#">Sobre</a>
      </div>
    </nav>
  );
};

export default Header;
