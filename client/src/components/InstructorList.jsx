import { Button, Flex, Typography, Avatar, Tooltip, Card } from "antd";
import React from "react";

const InstructorList = () => {
  return (
    <Flex align="center" justify="space-between" gap="large">
      <Flex vertical="row" gap="small" className="instructors">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            Instructors
          </Typography.Title>
          <Button type="link" className="gray--color">
            View All
          </Button>
        </Flex>
        <Card>
          <Flex align="center" justify="space-between">
            <Avatar.Group size={60}>
              <Tooltip title="User 1" placement="top">
                <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg" />
              </Tooltip>
              <Tooltip title="User 1" placement="top">
                <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg" />
              </Tooltip>
              <Tooltip title="User 1" placement="top">
                <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg" />
              </Tooltip>
              <Tooltip title="User 1" placement="top">
                <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg" />
              </Tooltip>
              <Tooltip title="User 1" placement="top">
                <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg" />
              </Tooltip>
            </Avatar.Group>
          </Flex>
        </Card>
      </Flex>

      <Flex vertical="row" gap="small" className="instructors">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            Anything
          </Typography.Title>
          <Button type="link" className="gray--color">
            View All
          </Button>
        </Flex>
        <Card>
          <Flex align="center" justify="space-between">
            <Avatar.Group size={60}>
              <Tooltip title="User 1" placement="top">
                <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg" />
              </Tooltip>
              <Tooltip title="User 1" placement="top">
                <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg" />
              </Tooltip>
              <Tooltip title="User 1" placement="top">
                <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg" />
              </Tooltip>
              <Tooltip title="User 1" placement="top">
                <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg" />
              </Tooltip>
              <Tooltip title="User 1" placement="top">
                <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg" />
              </Tooltip>
            </Avatar.Group>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};

export default InstructorList;
