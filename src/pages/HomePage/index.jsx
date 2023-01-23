import React from "react";
import { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Select,
  Skeleton,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { BsPencilSquare, BsEyeSlash, BsEye } from "react-icons/bs";

import fakeUserInfo from "../../data/fakeUserInfo.js";
const { userName, userAvatar, accountStatus, estimatedBalanceCoins, estimatedBalanceFiats } = fakeUserInfo;

import "./style.scss";
import EstimatedBalance from "./EstimatedBalance/index.jsx";

export default function HomePage() {
  const [balanceVisibility, setBalanceVisibility] = useState(true);

  return (
    <Stack className="home-page-container">
      <Flex className="user-card-container">
        <HStack>
          <Avatar name={userName} src={userAvatar} className="user-avatar" />
          <Box>
            <Text>{userName}</Text>
            <Badge>{accountStatus}</Badge>
          </Box>
        </HStack>
        <IconButton icon={<BsPencilSquare />} />
      </Flex>
      <HStack className="balance-header">
        <Heading as="h2" size={"lg"}>
          Estimated balance
        </Heading>
        <IconButton
          icon={balanceVisibility ? <BsEye /> : <BsEyeSlash />}
          onClick={() => setBalanceVisibility(!balanceVisibility)}
          variant={"solidGrey"}
          size={"sm"}
        />
      </HStack>
      {balanceVisibility ? (
        <EstimatedBalance
          estimatedBalanceCoins={estimatedBalanceCoins}
          estimatedBalanceFiats={estimatedBalanceFiats}
          coinOptions={["btc", "eth"]}
        />
      ) : (
        <Skeleton height={"40px"} speed={0}>
          Balance was hidden
        </Skeleton>
      )}
    </Stack>
  );
}
