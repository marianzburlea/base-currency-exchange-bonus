import React, { useState, useEffect } from "react";
import { API_URL } from "./exchange-rate.const";
import { getCurrentDate } from "./exchange-rate.util";
import InputText from "../input-text";
import MultiSelect from "../multi-select";
import ExchangeRatorList from "../exchange-rator-list";
import { ExchangeRateStyled } from "./exchange-rate.style";

const ExchangeRate = () => {
  const defaultValue = "GBP";
  const [date, setDate] = useState(getCurrentDate());
  const [base, setBase] = useState(defaultValue);
  const [rates, setRates] = useState({});

  useEffect(() => {
    const URL = `${API_URL}${date}?base=${base}`;
    fetch(URL)
      .then(r => r.json())
      .then(({ rates }) => setRates(rates));
  }, [date, base]);

  const inputTextPropList = {
    date,
    onChange: setDate
  };

  const multiSelectPropList = {
    size: 4,
    defaultValue,
    onChange: setBase,
    optionList: ["GBP", "USD", "RON", "EUR"]
  };

  return (
    <ExchangeRateStyled>
      <InputText {...inputTextPropList} />
      <MultiSelect {...multiSelectPropList} />
      <ExchangeRatorList rateList={rates} />
    </ExchangeRateStyled>
  );
};

export default ExchangeRate;
