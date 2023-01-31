import { Badge, HStack, Stack, Text, Box } from "@chakra-ui/react";
import React from "react";
import defineColorScheme from "../../../utils/defineColorScheme";

const badgeConfig = {
  red: "declined",
  green: "success",
  gray: "processing",
};

const dateOptions = {
  month: "long",
  day: "numeric",
  year: "numeric",
};

export default function DealHistory({ dealHistories }) {
  const DealItem = ({
    coin,
    dealType,
    fiat,
    orderAmount,
    dealStatus,
    executorName,
    executorId,
    deliveryDate,
  }) => (
    <HStack className="deal-item">
      <HStack className="deal-info-container">
        <Text className="coin">{coin.toUpperCase()}</Text>
        <Box>
          <Text className="deal-type">{dealType.toUpperCase()}</Text>
          <Text className="delivery-date">{deliveryDate.toLocaleString("en-US", dateOptions)}</Text>
        </Box>
      </HStack>

      <Box className="amount-status-container">
        <Text className="order-amount" color={dealType === 'sell' ? 'green' : ''}>
          {dealType === "sell" ? "+" : "-"}
          {' '}
          {fiat}
          {orderAmount}
        </Text>
        <Badge className="delivery-status" colorScheme={defineColorScheme(dealStatus, badgeConfig)}>
          {dealStatus}
        </Badge>
      </Box>
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
