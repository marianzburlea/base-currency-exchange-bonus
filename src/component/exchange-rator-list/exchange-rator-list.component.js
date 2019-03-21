import React, { useContext } from "react";
import { RateStyledList } from "./exchange-rator-list.style";
import { DispatchContext, getState } from "../../redux";
import { setCurrentRate } from "./exchange-rator-list.action";

const ExchangeRatorList = ({ rateList }) => {
  const dispatch = useContext(DispatchContext);
  const { currentRate } = getState("currentRate");

  const updateRate = rate => dispatch(setCurrentRate(rate));
  const getNiceNumber = (n, decimal, currency) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency
    }).format(~~(n * Math.pow(10, decimal)) / Math.pow(10, decimal));
  return (
    <RateStyledList>
      {Object.keys(rateList).map(rateKey => (
        <div
          className="rate-list-item"
          onClick={() => updateRate(rateKey)}
          data-key={rateKey}
        >
          {getNiceNumber(rateList[rateKey], 4, rateKey)}
        </div>
      ))}
    </RateStyledList>
  );
};

export default ExchangeRatorList;
