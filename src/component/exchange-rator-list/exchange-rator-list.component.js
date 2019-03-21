import React, { useContext } from "react";
import { RateListStyled, RateItemStyled } from "./exchange-rator-list.style";
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
    <RateListStyled>
      {Object.keys(rateList).map(rateKey => (
        <RateItemStyled
          key={rateKey}
          className="rate-list-item"
          onClick={() => updateRate(rateKey)}
          data-key={rateKey}
          selected={currentRate === rateKey}
        >
          {getNiceNumber(rateList[rateKey], 4, rateKey)}
          <span className="exchange-calendar" />
        </RateItemStyled>
      ))}
    </RateListStyled>
  );
};

export default ExchangeRatorList;
