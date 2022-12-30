import { Tab, TabList, Tabs } from "@chakra-ui/react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function BottomNavbar({ tabArr, className, ...rest }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Tabs index={null} className="bottom-navbar-wrapper" {...rest}>
      <TabList className="bottom-navbar-container">
        {tabArr.map(({ title, icon, path }, id) => (
          <Tab /* make active state of tab by comparing actual path and tab pathname */ onClick={() => navigate(path)} key={title + path} className="bottom-navbar-tab">{[icon, title]}</Tab>
        ))}
      </TabList>
    </Tabs>
  );
}
