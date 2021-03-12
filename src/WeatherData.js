import React, { useState } from "react";
import { Col } from "react-bootstrap";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function WeatherData() {
  const [ready, setReady] = useState(false);

  const [temperature, setTemperature] = useState(null);
  const [wind, setWind] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [description, setDescription] = useState(null);


  // error function

  function errorFunction() {
    alert(
      "😬 I love Narnia, but that's not a real place either. Please try again!"
    );
  }

  function displayTemp(response) {
    setTemperature(Math.round(response.data.main.temp));
    setWind(Math.round(response.data.wind.speed));
    setHumidity(Math.round(response.data.main.humidity));
    setDescription(response.data.weather[0].main);

    setReady(true);
  }

  if (ready) {
    return (
      <Col className="strong-side">
        <h6 className="dateTime">
          <span className="fullDate">Dec 26, 2020</span>
          <br />
          <span className="time">13:00</span> <br />
          <h1 className="city">Atlanta</h1>
          <h6 id="weather">{description}</h6>
          <h2 className="currentTemp">
            <span id="current-temp">{temperature}</span>
            <span href="#" id="f-link" className="active">
              °F
            </span>
            <span className="line">|</span>
            <span href="#" id="c-link">
              °C
            </span>
          </h2>
          <span className="wind-humidity">
            Wind: {wind} mph <br />
            Humidity: {humidity}%
          </span>
        </h6>
      </Col>
    );
  } else {
    const apiKey = "7cae0a9d7005e1c52f2d634f98d69293";
    let city = `Atlanta`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(displayTemp).catch(errorFunction);

    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 sec
      />
    );
  }
}
