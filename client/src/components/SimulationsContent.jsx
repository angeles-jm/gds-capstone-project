import { Button, Card, Flex, Image, Typography } from "antd";
import React from "react";
import simulationData from "../simulationData";

const { Meta } = Card;
const SimulationList = () => {
  return (
    <div>
      <div>
        <Flex align="center" justify="space-between">
          <Typography.Title level={3} strong className="primary--color">
            Simulations
          </Typography.Title>
        </Flex>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="btn-simulations btn"
          >
            Easy
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="btn btn-simulations "
          >
            Medium
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="btn btn-simulations "
          >
            Hard
          </Button>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {simulationData.map((data) => (
            <Card key={data.id} hoverable className="simulation-card">
              <Image src={data.picture} style={{ width: "350px" }} />
              <Meta title={data.name} style={{ marginTop: "10px" }} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimulationList;
