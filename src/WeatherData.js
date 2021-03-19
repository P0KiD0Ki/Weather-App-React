import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import WeatherDisplay from "./WeatherDisplay";

export default function WeatherData(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  //display API responses
  function displayTemp(response) {
    setWeather({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].main,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      time: new Date(),
    });
    // console.log(response.data);
  }

  // search engine
  function handleSubmit(event) {
    event.preventDefault();
    searchEngine();
  }

  function searchCity(event) {
    setCity(event.target.value);
  }

  // error function
  function errorFunction() {
    alert(
      "😬 I love Narnia, but that's not a real place either. Please try again!"
    );
  }

  function searchEngine() {
    const apiKey = "16fb7fe8628dfdd6476ce112c8b8470c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(displayTemp).catch(errorFunction);
  }

  if (weather.ready) {
    return (
      <div>
        <Row>
          {/* search bar */}
          <Col xs="auto">
            <form className="inputBox" id="search-form" onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Search a city..."
                className="textbox"
                autoComplete="off"
                autoFocus
                onChange={searchCity}
              />
              <input type="submit" id="button" value="GO" />
              <button id="button-loc">
                <i class="fas fa-crosshairs"></i>
              </button>
            </form>
          </Col>
        </Row>
        <WeatherDisplay weather={weather}/>
      </div>
    );
  } else {
    searchEngine();

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
