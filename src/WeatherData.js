import React from "react";
import { Col } from "react-bootstrap";

export default function WeatherData() {
  return (
    <Col className="strong-side">
      <h6 className="dateTime">
        <span className="fullDate">Dec 26, 2020</span>
        <br />
        <span className="time">13:00</span> <br />
        <h1 className="city">Atlanta</h1>
        <h6 id="weather">Sunny</h6>
        <h2 className="currentTemp">
          <span id="current-temp">55</span>
          <span href="#" id="f-link" className="active">
            °F
          </span>
          <span className="line">|</span>
          <span href="#" id="c-link">
            °C
          </span>
        </h2>
        <span className="wind-humidity">
          Wind: 5 mph <br />
          Humidity: 5%
        </span>
      </h6>
    </Col>
  );
}
