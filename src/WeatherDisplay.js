import React from "react";
import Icons from "./Icons";
import Forecast from "./Forecast";
import FormatDate from "./FormatDate";
import FormatTime from "./FormatTime";
import { Col, Row } from "react-bootstrap";

export default function WeatherDisplay(props) {
  return (
    <Row>
      {/* forecast data */}
      <Col>
        <Forecast city={props.weather.city} />
      </Col>
      {/* main icon */}
      <Col className="main-icon">
        <Icons icon="CLEAR_DAY" color="#EBCE00" size="225px" />
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
          <h2 className="currentTemp">
            <span id="current-temp">{props.weather.temperature}</span>
            <span href="#" id="f-link" className="active">
              °F
            </span>
            <span className="line">|</span>
            <span href="#" id="c-link">
              °C
            </span>
          </h2>
          <span className="wind-humidity">
            Wind: {props.weather.wind} mph <br />
            Humidity: {props.weather.humidity}%
          </span>
        </h6>
      </Col>
    </Row>
  );
}
