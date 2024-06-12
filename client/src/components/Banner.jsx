import { Card, Flex, Typography, Button } from "antd";
import React from "react";

const Banner = () => {
  return (
    <Card style={{ height: 260, padding: "20px" }}>
      <Flex vertical gap="30px">
        <Flex vertical align="flex-start">
          <Typography.Title level={2} strong>
            Airline Ticketing
          </Typography.Title>
          <Typography.Text type="secondary" strong>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            harum, praesentium aliquam nemo doloremque consequatur labore maxime
            non sunt? Fugit obcaecati minus officia facere commodi? Maiores
            itaque error id impedit?
          </Typography.Text>
        </Flex>

        <Flex gap="large">
          <Button type="primary" size="large">
            Explore More
          </Button>
          <Button size="large"> Explore More</Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Banner;
