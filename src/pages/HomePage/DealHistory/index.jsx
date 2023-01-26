import { Badge, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function DealHistory({ dealHistories }) {

    const DealItem = ({ coin, dealType, fiat, orderAmount, dealStatus, executorName, executorId }) => (
        <HStack>
            <Text className='trade'>
                {coin.toUpperCase()} {dealType}
            </Text>
            <Text className='order-amount'>
                {fiat} {orderAmount}
            </Text>
            <Badge>{dealStatus}</Badge>
            <Text>{executorName} {executorId}</Text>
        </HStack>
    )

    return (
        <Stack>
            {dealHistories.map((deal) => <DealItem {...deal} />)}
        </Stack>
    )
}
