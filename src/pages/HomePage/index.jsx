import { Stack, Tab, Tabs } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ExchangeDesk from "../ExchangeDesk";
import "./style.scss";

export default function HomePage() {
  return (
    <Stack display={'grid'} gridTemplateRows={'1fr 0.1fr'} className="main-page-wrapper">
      <Stack className="main-page-container">
        <Routes>
          <Route shouldRevalidate={true} index element={<ExchangeDesk />} />
          <Route path="exchange-desk" element={<ExchangeDesk />} />
        </Routes>
      </Stack>
      <Tabs colorScheme={{__selected: 'red.400'}} className="bottom-navbar">
        <Tab>Home</Tab>
        <Tab>P2P</Tab>
        <Tab>Currency rate</Tab>
        <Tab>Profile</Tab>
      </Tabs>
    </Stack>
  );
}
