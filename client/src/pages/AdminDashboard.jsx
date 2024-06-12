import { Button, Typography } from "antd";
import React from "react";
import { useAuth } from "../contexts/AuthContext";

const AdminDashboard = () => {
  const { userData, logout } = useAuth();
  return (
    <>
      <Typography.Title level={3}>AdminDashboard</Typography.Title>
      {userData && <Typography.Text>Welcome, {userData.name}!</Typography.Text>}
      <Button onClick={logout}>Logout</Button>
    </>
  );
};

export default AdminDashboard;
