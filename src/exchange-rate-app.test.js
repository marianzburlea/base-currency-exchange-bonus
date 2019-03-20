import React from "react";
import ReactDOM from "react-dom";
import ExchangeRateApp from "./exchange-rate-app";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ExchangeRateApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
