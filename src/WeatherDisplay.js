import React from "react";
import MainIcon from "./MainIcon";
// import Forecast from "./Forecast";
import FormatDate from "./FormatDate";
import FormatTime from "./FormatTime";
import { Col, Row } from "react-bootstrap";
import TempUnit from "./TempUnit"

export default function WeatherDisplay(props) {
  return (
    <Row>
      
      {/* main icon */}
      <Col>
      <Col className="main-icon">
        <MainIcon code={props.weather.icon} />
      </Col>
      </Col>
      {/* primary weather data */}
      <Col className="strong-side">
        <h6 className="dateTime">
          <span className="fullDate">
            <FormatDate date={props.weather.date} />
          </span>{" "}
          <br />
          <span className="time">
            <FormatTime time={props.weather.time} />
          </span>
          <br />
          <h1 className="city">{props.weather.city}</h1>
          <h6 id="weather">{props.weather.description}</h6>
            <TempUnit fahrenheit={props.weather.temperature} />
          <span className="wind-humidity">
            Wind: {props.weather.wind} mph <br />
            Humidity: {props.weather.humidity}%
          </span>
        </h6>
      </Col>
    </Row>
  );
}