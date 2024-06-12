import { Avatar, Flex, Typography } from "antd";
import Search from "antd/es/transfer/search";
import React from "react";
import {
  MessageOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAuth } from "../contexts/AuthContext";

const Headers = () => {
  const { userData } = useAuth();
  return (
    <Flex align="center" justify="space-between">
      <Typography.Title level={3} type="secondary">
        {" "}
        Welcome back, {userData.name}
      </Typography.Title>

      <Flex align="center" gap="3rem">
        <Search placeholder="Search Dashboard" allowClear />

        <Flex align="center" gap="10px">
          <MessageOutlined className="header-icon" />
          <NotificationOutlined className="header-icon" />
          <Avatar icon={<UserOutlined />} className="header-icon" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Headers;
