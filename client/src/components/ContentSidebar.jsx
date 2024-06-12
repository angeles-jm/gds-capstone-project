import { Card, Typography, Flex, Calendar } from "antd";
import React from "react";
import SideBarCalendar from "./SideBarCalendar";

const ContentSidebar = () => {
  return (
    <div>
      <Card className="card">
        <Flex vertical gap="large">
          <Typography.Title level={4} strong>
            Today
            {/* <Calendar /> */}
          </Typography.Title>
        </Flex>
      </Card>
    </div>
  );
};

export default ContentSidebar;
