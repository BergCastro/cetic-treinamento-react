import React from "react";
import { Link } from "react-router-dom";

import { NavBar, HeaderTitle, Links } from "./styles";

const Header = () => {
  return (
    <NavBar>
      <HeaderTitle>Blog Cetic</HeaderTitle>
      <Links>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
      </Links>
    </NavBar>
  );
};

export default Header;
