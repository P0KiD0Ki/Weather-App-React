import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Forecast() {
  const [ready, setReady] = useState(false);

  const [forecast, setForecast] = useState({});

  function displayForecast(response) {
    //sunday
    setForecast({
      //sunday
      sunHi: Math.round(response.data.data[0].app_max_temp),
      sunLo: Math.round(response.data.data[0].app_min_temp),
      //monday
      monHi: Math.round(response.data.data[1].app_max_temp),
      monLo: Math.round(response.data.data[1].app_min_temp),
      //tuesday
      tueHi: Math.round(response.data.data[2].app_max_temp),
      tueLo: Math.round(response.data.data[2].app_min_temp),
      //wednesday
      wedHi: Math.round(response.data.data[3].app_max_temp),
      wedLo: Math.round(response.data.data[3].app_min_temp),
      //thursday
      thurHi: Math.round(response.data.data[4].app_max_temp),
      thurLo: Math.round(response.data.data[4].app_min_temp),
      //friday
      friHi: Math.round(response.data.data[5].app_max_temp),
      friLo: Math.round(response.data.data[5].app_min_temp),
      //saturday
      satHi: Math.round(response.data.data[6].app_max_temp),
      satLo: Math.round(response.data.data[6].app_min_temp),
    });

    setReady(true);
  }

  if (ready) {
    return (
      <Container className="forecast">
        <Row>
          {/* sunday */}
          <Col xs={4} className="day-box">
            <strong className="day">Sun</strong>
            <br />
            {forecast.sunHi}° | {forecast.sunLo}°
            <br />
            icon
          </Col>
          {/* monday */}
          <Col xs={4} className="day-box">
            <strong className="day">Mon</strong>
            <br />
            {forecast.monHi}° | {forecast.monLo}°
            <br />
            icon
          </Col>
          {/* tuesday */}
          <Col xs={4} className="day-box">
            <strong className="day">Tues</strong>
            <br />
            {forecast.tueHi}° | {forecast.tueLo}°
            <br />
            icon
          </Col>
        </Row>
        <br />
        <Row>
          {/* wednesday */}
          <Col xs={4} className="day-box">
            <strong className="day">Wed</strong>
            <br />
            {forecast.wedHi}° | {forecast.wedLo}°
            <br />
            icon
          </Col>
          {/* thursday */}
          <Col xs={4} className="day-box">
            <strong className="day">Thurs</strong>
            <br />
            {forecast.thurHi}° | {forecast.thurLo}°
            <br />
            icon
          </Col>
          {/* friday */}
          <Col xs={4} className="day-box">
            <strong className="day">Fri</strong>
            <br />
            {forecast.friHi}° | {forecast.friLo}°
            <br />
            icon
          </Col>
        </Row>
        <br />
        <Row>
          {/* saturday */}
          <Col xs={4} className="day-box">
            <strong className="day">Sat</strong>
            <br />
            {forecast.satHi}° | {forecast.satLo}°
            <br />
            icon
          </Col>
        </Row>
      </Container>
    );
  } else {
    const forecastKey = "13ce2da2cd2d4da6b6a30677bd0ecc0d";
    let city = `Atlanta`;
    const forecastUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${forecastKey}&units=I`;

    axios.get(forecastUrl).then(displayForecast);

    return (
      <Loader
        type="Hearts"
        color="#5a454b"
        height={50}
        width={50}
        timeout={3000} //3 sec
      />
    );
  }
}
