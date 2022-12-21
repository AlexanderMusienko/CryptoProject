import { Tab, TabList, Tabs } from "@chakra-ui/react";
import React from "react";

export default function FilterTabs({ tabsArr, onClickFunc, containerClassName }) {
  return (
    <Tabs>
      <TabList className={containerClassName}>
        {tabsArr.map((tabName, i) => (
          <Tab key={tabName + i} onClick={onClickFunc}>{tabName}</Tab>
        ))}
      </TabList>
    </Tabs>
  );
}
