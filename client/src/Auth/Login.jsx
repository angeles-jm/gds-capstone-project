// import React from "react";
import { Card, Flex, Form, Typography, Input, Button, Alert, Spin } from "antd";
import { Link } from "react-router-dom";

import registerImage from "../assets/register.png";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const { loading, error, loginUser } = useLogin();
  const handleLogin = async (values) => {
    await loginUser(values);
  };

  return (
    <div className="form-flex">
      <Card className="form-container">
        <Flex gap="large" align="center">
          {/* Image */}
          <Flex flex={1}>
            <img src={registerImage} className="auth-image" />
          </Flex>
          {/* forms */}
          <Flex vertical flex={1}>
            <Typography.Title level={3} strong className="title">
              Sign In
            </Typography.Title>
            <Typography.Text type="secondary" strong className="slogan">
              For Philippine State College of Aeronautics Students
            </Typography.Text>
            <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "please input your Email Address!",
                  },
                  {
                    type: "email",
                    message: "The input is not valid Email Address",
                  },
                ]}
              >
                <Input size="large" placeholder="Enter your Email Address" />
              </Form.Item>
              {/* <FormItem></FormItem> */}
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "please input your Password!",
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Enter your password"
                />
              </Form.Item>

              {error && (
                <Alert
                  description={error}
                  type="error"
                  showIcon
                  closable
                  className="alert"
                />
              )}

              <Form.Item>
                <Button
                  type={`${loading ? "" : "primary"}`}
                  htmlType="submit"
                  size="large"
                  className="btn"
                >
                  {loading ? <Spin /> : "Sign In"}
                </Button>
              </Form.Item>
              <Form.Item>
                <Link to="/register">
                  <Button size="large" className="btn">
                    Create an account
                  </Button>
                </Link>
              </Form.Item>
            </Form>
          </Flex>
        </Flex>
      </Card>
    </div>
  );
};

export default Login;
