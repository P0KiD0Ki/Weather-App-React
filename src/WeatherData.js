import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import WeatherDisplay from "./WeatherDisplay";
import Forecast from "./Forecast";
import MainIcon from "./MainIcon"

export default function WeatherData(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  //display API responses
  function displayTemp(response) {
    setWeather({
      ready: true,
      temperature: Math.round(response.data.data[0].temp),
      wind: Math.round(response.data.data[0].wind_spd),
      humidity: Math.round(response.data.data[0].rh),
      description: response.data.data[0].weather.description,
      city: response.data.data[0].city_name,
      icon: response.data.data[0].weather.icon,
      date: new Date(response.data.data[0].ts * 1000),
      time: new Date(),
    });
  }

  // search engine
  function handleSubmit(event) {
    event.preventDefault();
    searchEngine();
  }

  function searchCity(event) {
    setCity(event.target.value);
  }

  function showPositon(position) {
    let apiKey = "13ce2da2cd2d4da6b6a30677bd0ecc0d";
    let apiUrl = `https://api.weatherbit.io/v2.0/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}&key=${apiKey}&units=I`;
  
    axios.get(apiUrl).then(displayTemp);
  }
  
  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPositon);
  }

  // error function
  function errorFunction() {
    alert(
      "😬 I love Narnia, but that's not a real place either. Please try again!"
    );
  }

  function searchEngine() {
    const apiKey = "13ce2da2cd2d4da6b6a30677bd0ecc0d";
    const apiUrl = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}&units=I`;
    

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
              <button id="button-loc" onClick={getLocation}>
                <i class="fas fa-crosshairs"></i>
              </button>
            </form>
          </Col>
        </Row>
        <Row>
        <WeatherDisplay weather={weather}/>
        {/* main icon */}
        <Col className="main-icon">
          <MainIcon code={weather.icon} />
        </Col>
          {/* forecast data */}
      <Col>
        <Forecast city={weather.city} defaultCity="Atlanta" />
      </Col>
        </Row>
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