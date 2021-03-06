import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

export default function Forecast() {
  const [temperature, setTemperature] = useState(null)
  function displayForecast(response) {

  }

  const forecastKey = "13ce2da2cd2d4da6b6a30677bd0ecc0d";
  let city = `Atlanta`
  const forecastUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${forecastKey}&units=I`;

  axios.get(forecastUrl).then(displayForecast);

  return (
    <Container className="forecast">
      <Row>
        <Col xs={4} className="day-box">
          <strong className="day">Sun</strong>
          <br />
          55° / 55°
          <br />
          icon
        </Col>
        <Col xs={4} className="day-box">
          <strong className="day">Mon</strong>
          <br />
          55° / 55°
          <br />
          icon
        </Col>
        <Col xs={4} className="day-box">
          <strong className="day">Tues</strong>
          <br />
          55° / 55°
          <br />
          icon
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={4} className="day-box">
          <strong className="day">Wed</strong>
          <br />
          55° / 55°
          <br />
          icon
        </Col>
        <Col xs={4} className="day-box">
          <strong className="day">Thurs</strong>
          <br />
          55° / 55°
          <br />
          icon
        </Col>
        <Col xs={4} className="day-box">
          <strong className="day">Fri</strong>
          <br />
          55° / 55°
          <br />
          icon
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={4} className="day-box">
          <strong className="day">Sat</strong>
          <br />
          55° / 55°
          <br />
          icon
        </Col>
      </Row>
    </Container>
  );
}
