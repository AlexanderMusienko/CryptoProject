import React from "react";
import { useState } from "react";
import { HStack, Wrap, Text } from "@chakra-ui/react";
import Select from "react-select";

const selectStyles = {
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    display: "none"
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none"
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    width: '70px'
  })
}

/**
 *
 * @param {Object} props
 * @param {array<objects>} props.estimatedBalanceCoin - Array of objects, object contains coin name and hot(number)
 * @param {array<objects>} props.estimatedBalanceFiat - Array of objects, object contains fiat name and hot(number)
 * @param {array<string>} props.coinOptions
 */

export default function EstimatedBalance({ estimatedBalanceCoins, estimatedBalanceFiats, coinOptions }) {
  const [coin, setCoin] = useState("btc");

  function setOptionValue(e) {
    setCoin(e.value);
  }

  const balance = {
    coinBalance: estimatedBalanceCoins.find((balanceObj) => balanceObj.coin === coin), // it is object not primitive
    fiatBalance: estimatedBalanceFiats.find((balanceObj) => balanceObj.fiat === "rub"), // it is object not primitive
  };

  return (
    <HStack className="balance-container">
      <Text className="coin-balance">
        {balance.coinBalance.hot} {balance.coinBalance.coin.toUpperCase()}
      </Text>
        <Select
        className="coin-select"
        styles={selectStyles}
        onChange={setOptionValue}
        options={coinOptions.map((coin, i) => {
          return { value: coin, label: coin.toUpperCase() };
        })}
      />
      <Text className="fiat-balance">
        ≈ {balance.fiatBalance.hot} {balance.fiatBalance.fiat.toUpperCase()}
      </Text>
    </HStack>
  );
}
