import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";

import "./styles/style.scss";
import { FaHome, FaUserAlt, FaChartLine, FaPeopleArrows } from "react-icons/fa";
import { Grid, Icon } from "@chakra-ui/react";
import ExchangeDesk from "./pages/ExchangeDesk";
import BottomNavbar from "./components/BottomNavbar";
import PageLayout from "./components/PageLayout";
import NotFound from "./components/NotFound";

import "./context/context.js";
import { FilterContext } from "./context/context.js";

const BOTTOM_NAV_DENYLIST = ["/", "*"];
const APP_TABS = [
  { title: "Home", icon: <Icon as={FaHome} />, path: "/home" },
  { title: "P2P", icon: <Icon as={FaPeopleArrows} />, path: "/exchange/desk" },
  { title: "Rates", icon: <Icon as={FaChartLine} />, path: "" },
  { title: "Profile", icon: <Icon as={FaUserAlt} />, path: "" },
];

function App() {
  const { pathname } = useLocation();
  console.log(pathname);
  console.log("navbar should be showed:", !BOTTOM_NAV_DENYLIST.includes(pathname));
  return (
    <>
      <Grid className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          {/*need to make layout for each page with styles overflow: hidden*/}
          <Route
            path="/home"
            element={
              <PageLayout>
                <HomePage />
              </PageLayout>
            }
          />
          <Route
            path="exchange/desk"
            element={
              <PageLayout>
                <ExchangeDesk />
              </PageLayout>
            }
          />
          <Route path="/exchange/deal/:dealId" element={<ExchangeDesk />} />
          <Route path="/exchange/deal/:dealId/chat" element={<ExchangeDesk />} />
          <Route path="/settings/payment-methods/add" element={<ExchangeDesk />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {!BOTTOM_NAV_DENYLIST.includes(pathname) && <BottomNavbar tabArr={APP_TABS} />}
      </Grid>
    </>
  );
}

export default App;
