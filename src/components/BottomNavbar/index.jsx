import { Tab, TabList, Tabs } from "@chakra-ui/react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function BottomNavbar({ tabArr, className, ...rest }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const currentTabIdx = tabArr.findIndex((tab) => tab.path === pathname);

  return (
    <Tabs isManual index={currentTabIdx} className="bottom-navbar-wrapper" {...rest}>
      <TabList className="bottom-navbar-container">
        {tabArr.map(({ title, icon, path }, id) => (
          <Tab onClick={() => navigate(path)} key={title + path + id} className="bottom-navbar-tab">
            {icon} {title}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
}
