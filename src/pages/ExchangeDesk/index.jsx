import { Stack, TabList, TabPanels, Tabs, Tab, TabPanel } from "@chakra-ui/react";
import React, { useState } from "react";
import DealItem from "./DealItem";
import FilterTabs from "./FilterTabs";
import fakeData from "../../data/fakeData";
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
    <>
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

      <Stack className="tab-panel">
        {fakeData[currencyTab][operationTab]
          .sort((a, b) => a.price > b.price)
          .map((item, i) => (
            <DealItem
              key={item.price + i}
              price={item.price}
              priceCurrency={item.priceCurrency}
              quantity={item.quantity}
              quantityCurrency={item.quantityCurrency}
            />
          ))}
      </Stack>
    </>
  );
}
