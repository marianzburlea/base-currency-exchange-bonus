import React, { useReducer } from "react";
import TopMenu from "./component/top-menu";
import { Router } from "@reach/router";
import HomePage from "./component/home-page";
import About from "./component/about";
import ExchangeRate from "./component/exchange-rate";
import Footer from "./component/footer";
import ThemeSwitch from "./component/theme-switch";
import { initialState, reducer, DispatchContext, StateContext } from "./redux";

const ExchangeRateApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
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
        </StateContext.Provider>
      </DispatchContext.Provider>
    </>
  );
};

export default ExchangeRateApp;
