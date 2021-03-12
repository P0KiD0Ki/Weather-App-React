import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Forecast() {
  const [ready, setReady] = useState(false);

  // sunday
  const [sunHiTemp, setSunHiTemp] = useState(null);
  const [sunLoTemp, setSunLoTemp] = useState(null);
  // monday
  const [monHiTemp, setMonHiTemp] = useState(null);
  const [monLoTemp, setMonLoTemp] = useState(null);
  //tuesday
  const [tueHiTemp, setTueHiTemp] = useState(null);
  const [tuesLoTemp, setTuesLoTemp] = useState(null);
  //wednesday
  const [wedHiTemp, setWedHiTemp] = useState(null);
  const [wedLoTemp, setwedLoTemp] = useState(null);
  //thursday
  const [thurHiTemp, setThurHiTemp] = useState(null);
  const [thurLoTemp, setThurLoTemp] = useState(null);
  //friday
  const [friHiTemp, setFriHiTemp] = useState(null);
  const [friLoTemp, setFriLoTemp] = useState(null);
  //saturday
  const [satHiTemp, setSatHiTemp] = useState(null);
  const [satLoTemp, setSatLoTemp] = useState(null);

  function displayForecast(response) {
    //sunday
    setSunHiTemp(Math.round(response.data.data[0].app_max_temp));
    setSunLoTemp(Math.round(response.data.data[0].app_min_temp));

    //monday
    setMonHiTemp(Math.round(response.data.data[1].app_max_temp));
    setMonLoTemp(Math.round(response.data.data[1].app_min_temp));

    //tuesday
    setTueHiTemp(Math.round(response.data.data[2].app_max_temp));
    setTuesLoTemp(Math.round(response.data.data[2].app_min_temp));

    //wednesday
    setWedHiTemp(Math.round(response.data.data[3].app_max_temp));
    setwedLoTemp(Math.round(response.data.data[3].app_min_temp));

    //thursday
    setThurHiTemp(Math.round(response.data.data[4].app_max_temp));
    setThurLoTemp(Math.round(response.data.data[4].app_min_temp));

    //friday
    setFriHiTemp(Math.round(response.data.data[5].app_max_temp));
    setFriLoTemp(Math.round(response.data.data[5].app_min_temp));

    //saturday
    setSatHiTemp(Math.round(response.data.data[6].app_max_temp));
    setSatLoTemp(Math.round(response.data.data[6].app_min_temp));

    setReady(true);
  }

  if (ready) {
    return (
      <Container className="forecast">
        <Row>
          <Col xs={4} className="day-box">
            <strong className="day">Sun</strong>
            <br />
            {sunHiTemp}° / {sunLoTemp}°
            <br />
            icon
          </Col>
          <Col xs={4} className="day-box">
            <strong className="day">Mon</strong>
            <br />
            {monHiTemp}° / {monLoTemp}°
            <br />
            icon
          </Col>
          <Col xs={4} className="day-box">
            <strong className="day">Tues</strong>
            <br />
            {tueHiTemp}° / {tuesLoTemp}°
            <br />
            icon
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={4} className="day-box">
            <strong className="day">Wed</strong>
            <br />
            {wedHiTemp}° / {wedLoTemp}°
            <br />
            icon
          </Col>
          <Col xs={4} className="day-box">
            <strong className="day">Thurs</strong>
            <br />
            {thurHiTemp}° / {thurLoTemp}°
            <br />
            icon
          </Col>
          <Col xs={4} className="day-box">
            <strong className="day">Fri</strong>
            <br />
            {friHiTemp}° / {friLoTemp}°
            <br />
            icon
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={4} className="day-box">
            <strong className="day">Sat</strong>
            <br />
            {satHiTemp}° / {satLoTemp}°
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
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={1000} //1 sec
      />
    );
  }
}
