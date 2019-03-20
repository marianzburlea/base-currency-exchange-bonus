import React from "react";
import TopMenu from "./component/top-menu";
import { Router } from "@reach/router";
import HomePage from "./component/home-page";
import About from "./component/about";
import ExchangeRate from "./component/exchange-rate";
import Footer from "./component/footer";
import ThemeSwitch from "./component/theme-switch";

const ExchangeRateApp = () => {
  return (
    <>
      <div className="content">
        <ThemeSwitch />
        <TopMenu />
        <Router primary={false}>
          <HomePage path="/" />
          <About path="/about" />
          <ExchangeRate path="/exchange" />
        </Router>
      </div>
      <Footer />
    </>
  );
};

export default ExchangeRateApp;
