import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/Header";


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
      
    </BrowserRouter>
  );
};

export default Routes;
