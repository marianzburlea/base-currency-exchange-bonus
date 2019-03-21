import React, { useContext, useRef, useState } from "react";
import { RateListStyled, RateItemStyled } from "./exchange-rator-list.style";
import { DispatchContext, getState } from "../../redux";
import { setCurrentRate } from "./exchange-rator-list.action";
import { getCurrentDate } from "../util/date.util";
import { API_URL } from "../exchange-rate/exchange-rate.const";

const ExchangeRatorList = ({ rateList }) => {
  const dispatch = useContext(DispatchContext);
  const { currentRate } = getState("currentRate");
  const giginel = useRef(null);
  const [rateHistory, setRateHistory] = useState({});

  const teachMeHistory = rateKey => {
    const URL = `${API_URL}history?start_at=${getCurrentDate(
      "last-year"
    )}&end_at=${getCurrentDate()}&base=${currentRate}`;
    fetch(URL)
      .then(r => r.json())
      .then(({ rates }) => setRateHistory(rates));

    giginel.current.showModal();
  };

  const formatNumber = (number, decimal) =>
    ~~(+number * Math.pow(10, decimal)) / Math.pow(10, decimal);

  const updateRate = rate => dispatch(setCurrentRate(rate));
  const getNiceNumber = (n, decimal, currency) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency
    }).format(formatNumber(n, decimal));
  const rateHistoryKeyList = Object.keys(rateHistory);
  let rateAvailableList = [];
  if (rateHistoryKeyList.length) {
    rateAvailableList = Object.keys(
      rateHistory[rateHistoryKeyList.reduce(p => p)]
    );
  }

  return (
    <RateListStyled>
      <dialog ref={giginel}>
        <header>
          <h4>The History of the rate for the last year</h4>
          <button onClick={() => giginel.current.close()}>&times;</button>
        </header>
        <section>
          <table border="1">
            <thead>
              <tr>
                <td>Date</td>
                {rateAvailableList.map((rate, key) => (
                  <td key={key}>{rate}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {rateHistoryKeyList.map(rateHistoryKey => (
                <tr key={rateHistoryKey}>
                  <td>{rateHistoryKey}</td>
                  {rateAvailableList.map((rate, key) => (
                    <td key={key}>
                      {rateHistory &&
                        rateHistory[rateHistoryKey] &&
                        formatNumber(rateHistory[rateHistoryKey][rate], 2)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </dialog>
      {Object.keys(rateList).map(rateKey => (
        <RateItemStyled
          key={rateKey}
          className="rate-list-item"
          onClick={() => updateRate(rateKey)}
          data-key={rateKey}
          selected={currentRate === rateKey}
        >
          {getNiceNumber(rateList[rateKey], 4, rateKey)}
          <span
            onClick={() => teachMeHistory(rateKey)}
            className="exchange-calendar"
          />
        </RateItemStyled>
      ))}
    </RateListStyled>
  );
};

export default ExchangeRatorList;
