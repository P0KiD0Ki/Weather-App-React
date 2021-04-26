import React from "react";
import { Container, Col } from "react-bootstrap";
import WeatherData from "./WeatherData";
import "./MainContainer.css"

export default function MainContainer() {
  return (
    <Container fluid className="primary-container">
      <Col>
        <WeatherData defaultCity="Atlanta" />
      </Col>
    </Container>
  );
}