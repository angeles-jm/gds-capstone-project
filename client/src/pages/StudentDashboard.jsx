import React, { useState } from "react";
import { Button, Layout, Flex } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Sidebar from "../components/Sidebar";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useAuth } from "../contexts/AuthContext";
import Headers from "../components/Headers";
import MainContent from "../components/MainContent";
// import SideContent from "./components/SideContent";
import SideContent from "../components/SideContent";
import SimulationList from "../components/SimulationList";

const { Sider, Header, Content } = Layout;

const StudentDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider"
      >
        <Sidebar />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggleCollapse}
          className="trigger-btn"
        />
      </Sider>

      <Layout>
        <Header className="header">
          <Headers />
        </Header>
        <Content className="content">
          <div style={{ display: "flex", gap: "large" }}>
            <Flex gap="large">
              <MainContent />

              <SideContent />
            </Flex>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default StudentDashboard;
