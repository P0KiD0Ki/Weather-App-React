import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "./SearchBar";
import WeatherData from "./WeatherData";

export default function MainContainer() {
  return (
    <Container fluid className="primary-container">
      {/* search engine bar */}
      <SearchBar />
      <Col>
        {/* weather data */}
        <WeatherData />
      </Col>
    </Container>
  );
}
