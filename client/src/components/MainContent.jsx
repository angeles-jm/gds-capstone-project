import { Flex } from "antd";
import React from "react";
import Banner from "./Banner";
import SimulationList from "./SimulationList";
import InstructorList from "./InstructorList";

const MainContent = () => {
  return (
    <div style={{ flex: 1 }}>
      <Flex vertical gap="2.3rem">
        <Banner />
        <SimulationList />
        <InstructorList />
      </Flex>
    </div>
  );
};

export default MainContent;
