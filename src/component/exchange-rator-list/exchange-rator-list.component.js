import React from "react";
import { RateStyledList } from "./exchange-rator-list.style";

const ExchangeRatorList = ({ rateList }) => {
  const getNiceNumber = (n, decimal, currency) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency
    }).format(~~(n * Math.pow(10, decimal)) / Math.pow(10, decimal));
  return (
    <RateStyledList>
      {Object.keys(rateList).map(rateKey => (
        <div className="rate-list-item" data-key={rateKey}>
          {getNiceNumber(rateList[rateKey], 4, rateKey)}
        </div>
      ))}
    </RateStyledList>
  );
};

export default ExchangeRatorList;
