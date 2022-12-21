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
 // Я тут
 function chooseTab2(setterFunc) {
    return function(e) {
        console.log(setterFunc, e);
        setterFunc(e.target.innerHTML.toLowerCase());
        console.log(e.target.innerHTML.toLowerCase());
        return true;
    }
 }
 const res = chooseTab2(console.log) // <- res будет хранить функцию в себе просто с прибитым аргументом "консоль.лог"
 typeof res === 'function'
 const res2 = res({event: 'React OnClick'}) // <- res2 будет хранить уже "true"
 typeof res2 === 'boolean'
 const res3 = chooseTab2(console.log)({event: 'React OnClick'}) // res2 === res3
 typeof res3 === 'boolean'

  const chooseTab = setterFunc => e => {
    console.log(setterFunc, e);
    setterFunc(e.target.innerHTML.toLowerCase());
    console.log(e.target.innerHTML.toLowerCase());
  }

  return (
    <Stack className="exchange-desk-container">
      <Stack className="operation-tab-container">
        <FilterTabs
          tabsArr={operationTabsArr}
          containerClassName="operation-tab-list"
          onClickFunc={chooseTab(setOperationTab)}
        />
        <FilterTabs
          tabsArr={currencyTabsArr}
          containerClassName="currency-tab-list"
          onClickFunc={chooseTab(setCurrencyTab)}
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
    </Stack>
  );
}
