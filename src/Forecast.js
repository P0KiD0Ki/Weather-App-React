import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import ForecastIcons from "./ForecastIcons";
import "./Forecast.css"

export default function Forecast(props) {
  const [forecast, setForecast] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  // const [icon, setIcon] = useState(props.icon);

  //display forecast responses
  function displayForecast(response) {
    //sunday
    setForecast({
      ready: true,

      //sunday
      sunHi: Math.round(response.data.data[0].app_max_temp),
      sunLo: Math.round(response.data.data[0].app_min_temp),
      sunIcon: response.data.data[0].weather.icon,
      //monday
      monHi: Math.round(response.data.data[1].app_max_temp),
      monLo: Math.round(response.data.data[1].app_min_temp),
      monIcon: response.data.data[1].weather.icon,
      //tuesday
      tueHi: Math.round(response.data.data[2].app_max_temp),
      tueLo: Math.round(response.data.data[2].app_min_temp),
      tueIcon: response.data.data[2].weather.icon,
      //wednesday
      wedHi: Math.round(response.data.data[3].app_max_temp),
      wedLo: Math.round(response.data.data[3].app_min_temp),
      wedIcon: response.data.data[3].weather.icon,
      //thursday
      thurHi: Math.round(response.data.data[4].app_max_temp),
      thurLo: Math.round(response.data.data[4].app_min_temp),
      thurIcon: response.data.data[4].weather.icon,
      //friday
      friHi: Math.round(response.data.data[5].app_max_temp),
      friLo: Math.round(response.data.data[5].app_min_temp),
      friIcon: response.data.data[5].weather.icon,
      //saturday
      satHi: Math.round(response.data.data[6].app_max_temp),
      satLo: Math.round(response.data.data[6].app_min_temp),
      satIcon: response.data.data[6].weather.icon,
    
    });
    setCity(props.city);
  }

  function loadForecast() {
    const forecastKey = "13ce2da2cd2d4da6b6a30677bd0ecc0d";
    const forecastUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${forecastKey}&units=I`;

    axios.get(forecastUrl).then(displayForecast);

    // let forecastGeoKey = "13ce2da2cd2d4da6b6a30677bd0ecc0d";
    // let forecastGeoUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${props.lat}&lon=${props.lon}&key=${forecastGeoKey}&units=I`;

    // axios.get(forecastGeoUrl).then(displayForecast);
  }

  if (forecast.ready && city === props.city) {
    return (
      <Container className="forecast">
        <Row>
          {/* sunday */}
          <Col xs={4} className="day-box">
            <strong className="day">Sun</strong>
            <br />
            {forecast.sunHi}° | {forecast.sunLo}°
            <br />
            <ForecastIcons code={forecast.sunIcon}/>
          </Col>
          {/* monday */}
          <Col xs={4} className="day-box">
            <strong className="day">Mon</strong>
            <br />
            {forecast.monHi}° | {forecast.monLo}°
            <br />
            <ForecastIcons code={forecast.monIcon}/>
          </Col>
          {/* tuesday */}
          <Col xs={4} className="day-box">
            <strong className="day">Tue</strong>
            <br />
            {forecast.tueHi}° | {forecast.tueLo}°
            <br />
            <ForecastIcons code={forecast.tueIcon}/>
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
            <ForecastIcons code={forecast.wedIcon}/>
          </Col>
          {/* thursday */}
          <Col xs={4} className="day-box">
            <strong className="day">Thu</strong>
            <br />
            {forecast.thurHi}° | {forecast.thurLo}°
            <br />
            <ForecastIcons code={forecast.thurIcon}/>
          </Col>
          {/* friday */}
          <Col xs={4} className="day-box">
            <strong className="day">Fri</strong>
            <br />
            {forecast.friHi}° | {forecast.friLo}°
            <br />
            <ForecastIcons code={forecast.friIcon}/>
          </Col>
        </Row>
        <br />
        <Row>
          {/* saturday */}
          <Col xs={4} className="day-box saturday">
            <strong className="day">Sat</strong>
            <br />
            {forecast.satHi}° | {forecast.satLo}°
            <br />
            <ForecastIcons code={forecast.satIcon}/>
          </Col>
        </Row>
      </Container>
    );
  } else {
    loadForecast();

    return (
      <Loader
        className="loader"
        type="Hearts"
        color="#5a454b"
        height={200}
        width={200}
        timeout={3000} //3 sec
      />
    );
  }
}
