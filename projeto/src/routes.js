import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/Header";
import RoundButton from "./components/RoundButton";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

// const Sobre = () => {
//   return <div>Sobre</div>;
// };

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Sobre} path="/sobre" />
      </Switch>
      <RoundButton onClick={() => alert("Adicionar um post")}>+</RoundButton>
    </BrowserRouter>
  );
};

export default Routes;
