import React, { useState, useEffect } from "react";
import { Flex, Menu, Layout, Card, Avatar, Typography, Button } from "antd";
import { FaLeaf } from "react-icons/fa";
import {
  UserOutlined,
  LogoutOutlined,
  OrderedListOutlined,
  CarryOutOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { useAuth } from "../contexts/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  const [selectedKey, setSelectedKey] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { userData, logout } = useAuth();

  useEffect(() => {
    // Update selected key based on the current location path
    switch (location.pathname) {
      case "/student-dashboard":
        setSelectedKey("1");
        break;
      case "/simulations":
        setSelectedKey("2");
        break;
      case "/quiz":
        setSelectedKey("3");
        break;
      case "/settings":
        setSelectedKey("4");
        break;
      default:
        setSelectedKey("");
        break;
    }
  }, [location.pathname]);

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
    navigate(e.key);
  };

  const handleLogout = async () => {
    await logout();
  };

  const menuItems = [
    {
      key: "/student-dashboard",
      icon: <UserOutlined />,
      label: "Student Dashboard",
    },
    {
      key: "/simulations",
      icon: <OrderedListOutlined />,
      label: "Simulations",
    },
    {
      key: "/quiz",
      icon: <CarryOutOutlined />,
      label: "Quiz",
    },
    {
      key: "/settings",
      icon: <SettingOutlined />,
      label: "Settings",
    },
    {
      key: "/logout",
      icon: <LogoutOutlined />,
      label: (
        <span onClick={handleLogout} style={{ cursor: "pointer" }}>
          Logout
        </span>
      ),
    },
  ];

  return (
    <>
      <Flex align="center" justify="center"></Flex>
      <Card className="profile-card">
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              paddingBottom: "20px",
            }}
          >
            <Avatar size={40} icon={<UserOutlined />} />
            <Typography.Title level={5} strong className="username">
              {userData.name}
            </Typography.Title>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingBottom: "20px",
            }}
          >
            <Typography.Text>Email: {userData.email}</Typography.Text>
            <Typography.Text type="secondary">
              Role: {userData.role}
            </Typography.Text>
          </div>
        </>
      </Card>

      <Menu
        mode="inline"
        // defaultSelectedKeys={["1"]}
        // className="menu-bars"
        defaultSelectedKeys={[selectedKey]}
        onClick={handleMenuClick}
        items={menuItems}
      >
        {/* <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/">Student Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<OrderedListOutlined />}>
          <Link to="/simulations">Simulations</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<CarryOutOutlined />}>
          <Link to="/quiz">Quiz</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<SettingOutlined />}>
          <Link to="/settings">Settings</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<LogoutOutlined />} onClick={handleLogout}>
          Logout
        </Menu.Item> */}
      </Menu>
    </>
  );
};

export default Sidebar;
