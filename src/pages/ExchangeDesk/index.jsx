import React, { useState } from "react";
import { Stack, } from "@chakra-ui/react";
import { FilterContext } from "../../context/context.js";

import DealItem from "./DealItem";
import FilterTabs from "./FilterTabs";
import DivNM from "../../components/NMDiv";

import fakeData from "../../data/fakeAdvertisementData";

import "./style.scss";

const operationTabsArr = ["Buy", "Sell"];
const currencyTabsArr = ["USDT", "TON", "BTC", "ETH"];

export default function ExchangeDesk() {
  const [operationTab, setOperationTab] = useState("buy");
  const [currencyTab, setCurrencyTab] = useState("usdt");

  function chooseTab(setterFunc, e) {
    setterFunc(e.target.innerHTML.toLowerCase());
    console.log(e.target.innerHTML.toLowerCase());
  }

  return (
    <FilterContext.Provider value={{operationTab}}>
      <Stack className="operation-tab-container">
        <FilterTabs
          tabsArr={operationTabsArr}
          containerClassName="operation-tab-list"
          onClickFunc={(e) => chooseTab(setOperationTab, e)}
        />
        <FilterTabs
          tabsArr={currencyTabsArr}
          containerClassName="currency-tab-list"
          onClickFunc={(e) => chooseTab(setCurrencyTab, e)}
        />
      </Stack>

      <DivNM className="tab-panel">
        {fakeData[currencyTab][operationTab]
          .sort((a, b) => a.price > b.price)
          .map((advertisementItem, i) => (
            <DealItem
              key={advertisementItem.price + i}
              {...advertisementItem}
            />
          ))}
      </DivNM>
    </FilterContext.Provider>
  );
}
