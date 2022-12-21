import { Tab, Tabs } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ExchangeDesk from "../ExchangeDesk";
import './style.scss'

export default function HomePage() {
  return (
    <>
      <Routes>
        <Route index element={<ExchangeDesk />} />
        <Route path="exchange-desk" element={<ExchangeDesk />} />
      </Routes>
      <Tabs variant={'unstyled'} className="bottom-navbar">
        <Tab>Home</Tab>
        <Tab>P2P</Tab>
        <Tab>Profile</Tab>
      </Tabs>
    </>
  );
}
