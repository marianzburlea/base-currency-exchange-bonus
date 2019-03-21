import React, { useState, useEffect } from "react";
import { API_URL } from "./exchange-rate.const";
import { getCurrentDate } from "../util/date.util";
import InputText from "../input-text";
import ExchangeRatorList from "../exchange-rator-list";
import { ExchangeRateStyled } from "./exchange-rate.style";
import { getState } from "../../redux";

const ExchangeRate = () => {
  const { currentRate } = getState("currentRate");
  const [date, setDate] = useState(getCurrentDate());
  const [rates, setRates] = useState({});

  useEffect(() => {
    const URL = `${API_URL}${date}?base=${currentRate}`;
    fetch(URL)
      .then(r => r.json())
      .then(({ rates }) => setRates(rates));
  }, [date, currentRate]);

  const inputTextPropList = {
    date,
    onChange: setDate
  };

  return (
    <ExchangeRateStyled>
      <InputText {...inputTextPropList} />
      <ExchangeRatorList rateList={rates} />
    </ExchangeRateStyled>
  );
};

export default ExchangeRate;
