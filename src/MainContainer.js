import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Icons from "./Icons";
import Forecast from "./Forecast";
import SearchBar from "./SearchBar";
import WeatherData from "./WeatherData";

export default function MainContainer() {
  return (
    <Container fluid className="primary-container">
      {/* search engine bar */}
      <SearchBar />
      {/* forecast grid */}
      <Row>
        <Col>
          <Row>
            <Col>
              <Forecast />
            </Col>
            {/* main icon column */}
            <Col className="main-icon">
              <Icons icon="CLEAR_DAY" color="#EBCE00" size="225px" />
            </Col>
          </Row>
        </Col>
        {/* weather data */}
        <WeatherData />
      </Row>
    </Container>
  );
}
