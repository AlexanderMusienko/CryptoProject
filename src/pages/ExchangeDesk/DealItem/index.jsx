import { Divider, Stack, Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'
import React from 'react'

export default function DealItem({priceCurrency, price, quantity, quantityCurrency}) {
  return (
    <Stack>
      <Divider orientation='horizontal' />
      <Stat>
        <StatLabel>Price</StatLabel>
        <StatNumber>{priceCurrency}{price}</StatNumber>
        <StatHelpText>Quantity {quantity} {quantityCurrency}</StatHelpText>
      </Stat>
    </Stack>
  )
}
