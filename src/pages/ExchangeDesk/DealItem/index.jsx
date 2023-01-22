import React, { useContext } from "react";
import { Button, Divider, Stack, Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import AdvertiserInfo from "./AdvertiserInfo";
import firstLetterToUpperCase from "../../../utils/firstLetterToUpperCase";

import "./style.scss";
import { FilterContext } from "../../../context/context";

export default function DealItem({ priceCurrency, price, quantity, quantityCurrency, advertiserInfo }) {
  const { operationTab } = useContext(FilterContext);

  return (
    <Stack className="deal-item-container">
      <Divider />
      <AdvertiserInfo {...advertiserInfo} />

      <Stack className="advertisement-item">
        <Stat>
          <StatLabel>Price</StatLabel>
          <StatNumber>
            {priceCurrency}
            {price}
          </StatNumber>
          <StatHelpText>
            Quantity {quantity} {quantityCurrency.toUpperCase()}
          </StatHelpText>
        </Stat>
        <Button className="buy-sell-button">
          {firstLetterToUpperCase(operationTab)} {quantityCurrency.toUpperCase()}
        </Button>
      </Stack>
    </Stack>
  );
}
