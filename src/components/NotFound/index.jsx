import { Heading, ScaleFade, Stack, Text } from "@chakra-ui/react";
import React from "react";
import './style.scss';

export default function NotFound() {
  return (
    <Stack className="notfound-container">
      <ScaleFade delay={0.5} in={true}>
        <Heading>Oops... Nothing found</Heading>
        <Text className="text">It seems that you are trying to get access for not existing page</Text>
      </ScaleFade>
    </Stack>
  );
}
