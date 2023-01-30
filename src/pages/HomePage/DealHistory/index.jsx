import { Badge, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import defineColorScheme from "../../../utils/defineColorScheme";

const badgeConfig = {
  red: "declined",
  green: "success",
  gray: "processing",
};

export default function DealHistory({ dealHistories }) {
  const DealItem = ({ coin, dealType, fiat, orderAmount, dealStatus, executorName, executorId }) => (
    <HStack className="deal-item">
      <Text className="transaction-type">
        {coin.toUpperCase()} {dealType.toUpperCase()}
      </Text>
      <Text className="order-amount">
        {fiat}
        {orderAmount}
      </Text>
      <Badge className="delivery-status" colorScheme={defineColorScheme(dealStatus, badgeConfig)}>
        {dealStatus}
      </Badge>
      <Text className="executor-info">
        {executorName} {executorId}
      </Text>
    </HStack>
  );

  return (
    <Stack className="deal-history-container">
      {dealHistories.map((deal) => (
        <DealItem {...deal} />
      ))}
    </Stack>
  );
}
