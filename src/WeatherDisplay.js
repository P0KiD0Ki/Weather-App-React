import React from "react";
// import MainIcon from "./MainIcon";
import FormatDate from "./FormatDate";
import FormatTime from "./FormatTime";
import { Col, Row } from "react-bootstrap";
import TempUnit from "./TempUnit";

export default function WeatherDisplay(props) {
  return (
    <Row>
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
            Humidity: {props.weather.humidity}%<br />
            Wind: {props.weather.wind} mph
          </span>
        </h6>
      </Col>
    </Row>
  );
}
