import React, { useState } from "react";
import { Col } from "react-bootstrap";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function WeatherData(props) {
  const [weather, setWeather] = useState({ ready: false });

  // error function

  function errorFunction() {
    alert(
      "😬 I love Narnia, but that's not a real place either. Please try again!"
    );
  }

  function displayTemp(response) {
    setWeather({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].main,
      city: response.data.name,
    });
  }

  if (weather.ready) {
    return (
      <Col className="strong-side">
        <h6 className="dateTime">
          <span className="fullDate">Dec 26, 2020</span>
          <br />
          <span className="time">13:00</span> <br />
          <h1 className="city">{weather.city}</h1>
          <h6 id="weather">{weather.description}</h6>
          <h2 className="currentTemp">
            <span id="current-temp">{weather.temperature}</span>
            <span href="#" id="f-link" className="active">
              °F
            </span>
            <span className="line">|</span>
            <span href="#" id="c-link">
              °C
            </span>
          </h2>
          <span className="wind-humidity">
            Wind: {weather.wind} mph <br />
            Humidity: {weather.humidity}%
          </span>
        </h6>
      </Col>
    );
  } else {
    const apiKey = "16fb7fe8628dfdd6476ce112c8b8470c";
    let city = "Atlanta"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(displayTemp).catch(errorFunction);

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
