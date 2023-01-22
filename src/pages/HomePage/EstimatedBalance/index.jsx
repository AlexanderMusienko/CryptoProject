import { HStack, Select, Wrap, Text } from "@chakra-ui/react";
import React from "react";

/**
 *
 * @param {Object} props
 * @param {number} props.estimatedBalance
 * @param {string} props.coin
 * @param {array<string>} props.coinOptions
 */

export default function EstimatedBalance({ estimatedBalanceCoin, coin, estimatedBalanceFiat, coinOptions }) {
  return (
    <HStack className="balance-container">
      <Text className="balance">
        {estimatedBalanceCoin} {coin.toUpperCase()}
      </Text>
      <Wrap>
        <Select className="coin-select">
          {coinOptions.map((coin) => (
            <option value={coin}>{coin.toUpperCase()}</option>
          ))}
        </Select>
      </Wrap>
    </HStack>
  );
}
