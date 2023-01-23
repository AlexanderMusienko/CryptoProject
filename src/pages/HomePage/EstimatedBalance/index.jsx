import React from "react";
import { useState } from "react";
import { HStack, Wrap, Text } from "@chakra-ui/react";
import Select from "react-select";

/**
 *
 * @param {Object} props
 * @param {array<objects>} props.estimatedBalanceCoin - Array of objects, object contains coin name and hot(number)
 * @param {array<objects>} props.estimatedBalanceFiat - Array of objects, object contains fiat name and hot(number)
 * @param {array<string>} props.coinOptions
 */

export default function EstimatedBalance({ estimatedBalanceCoins, estimatedBalanceFiats, coinOptions }) {
  const [coin, setCoin] = useState("btc");

  function getOptionValue(e) {
    setCoin(e.target.value);
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
      <Wrap className="coin-select">
        <Select
          // options={coinOptions.map((coin, i) => {
          //   return { value: coin, label: coin };
          // })}
          options={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
          ]}
        />
      </Wrap>
      <Text className="fiat-balance">
        ≈ {balance.fiatBalance.hot} {balance.fiatBalance.fiat.toUpperCase()}
      </Text>
    </HStack>
  );
}
