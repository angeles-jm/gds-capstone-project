// import React from "react";
import {
  Card,
  Flex,
  Form,
  Typography,
  Input,
  Button,
  Alert,
  Spin,
  Select,
} from "antd";
import { Link } from "react-router-dom";

import registerImage from "../assets/register.png";
import useSignup from "../hooks/useSignup";

const { Option } = Select;

const Register = () => {
  const { loading, error, registerUser } = useSignup();
  const handleRegister = (values) => {
    registerUser(values);
  };

  return (
    <div className="form-flex">
      <Card className="form-container">
        <Flex gap="large" align="center">
          {/* forms */}
          <Flex vertical flex={1}>
            <Typography.Title level={3} strong className="title">
              Create an account
            </Typography.Title>
            <Typography.Text type="secondary" strong className="slogan">
              For Philippine State College of Aeronautics Students
            </Typography.Text>
            <Form
              layout="vertical"
              onFinish={handleRegister}
              autoComplete="off"
            >
              <Form.Item
                label="Full Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "please input your full name!",
                  },
                ]}
              >
                <Input size="large" placeholder="Enter your Full Name" />
              </Form.Item>
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
              <Form.Item
                label="Password"
                name="passwordConfirm"
                rules={[
                  {
                    required: true,
                    message: "Please Confirm your password!",
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Re-enter your password"
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

              <Form.Item
                label="Role"
                name="role"
                rules={[
                  {
                    required: true,
                    message: "Please select your role!",
                  },
                ]}
              >
                <Select size="large" placeholder="Select a role">
                  <Option value="student">Student</Option>
                  <Option value="instructor">Instructor</Option>
                  <Option value="admin">Admin</Option>
                </Select>
              </Form.Item>

              <Form.Item>
                <Button
                  type={`${loading ? "" : "primary"}`}
                  htmlType="submit"
                  size="large"
                  className="btn"
                >
                  {loading ? <Spin /> : "Create Account"}
                </Button>
              </Form.Item>
              <Form.Item>
                <Link to="/login">
                  <Button size="large" className="btn">
                    Sign in
                  </Button>
                </Link>
              </Form.Item>
            </Form>
          </Flex>
          {/* Image */}
          <Flex flex={1}>
            <img src={registerImage} className="auth-image" />
          </Flex>
        </Flex>
      </Card>
    </div>
  );
};

export default Register;
