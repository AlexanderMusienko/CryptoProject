import React from "react";
import { Avatar, Stack, HStack, Text, Divider } from "@chakra-ui/react";
import NMDiv from "../../../../components/NMDiv";

export default function AdvertiserInfo({ advertiserName, ordersNum, efficiency, avatarSrc }) {
  return (
    <Stack className="advertiser-container">
      <HStack className="info-container">
            <Avatar className="avatar" name={advertiserName} src={avatarSrc}/>
            <Text className="name">{advertiserName}</Text>
      </HStack>
      <NMDiv className="rating-container">
        <Text className="orders">Orders: {ordersNum}</Text>
        <Divider height={'15px'} orientation="vertical"/>
        <Text className="efficiency">{efficiency}%</Text>
      </NMDiv>
    </Stack>
  );
}
