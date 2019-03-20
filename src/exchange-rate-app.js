import React from "react";
import TopMenu from "./component/top-menu";
import { Router } from "@reach/router";
import HomePage from "./component/home-page";
import About from "./component/about";
import ExchangeRate from "./component/exchange-rate";

const ExchangeRateApp = () => {
  return (
    <>
      <div className="content">
        <TopMenu />
        <Router primary={false}>
          <HomePage path="/" />
          <About path="/about" />
          <ExchangeRate path="/exchange" />
        </Router>
      </div>
      <footer>&copy; {+new Date().getFullYear()} ExchangeRator</footer>
    </>
  );
};

export default ExchangeRateApp;
