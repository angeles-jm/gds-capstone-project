import { Button, Card, Flex, Image, Typography } from "antd";
import React from "react";
import simulationData from "../simulationData";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;
const SimulationList = () => {
  const navigate = useNavigate();

  const handleViewAllSimulation = () => {
    navigate("/simulations");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography.Title level={3} strong className="primary--color">
          Simulations
        </Typography.Title>
        <Button
          type="link"
          className="gray-color"
          onClick={handleViewAllSimulation}
        >
          View all
        </Button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {simulationData.slice(0, 3).map((data) => (
          <Card key={data.id} hoverable className="simulation-card">
            <Image src={data.picture} style={{ width: "250px" }} />
            <Meta title={data.name} style={{ marginTop: "5px" }} />
          </Card>
        ))}
      </div>
    </>
  );
};

export default SimulationList;
