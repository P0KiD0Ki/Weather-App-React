import React from "react";

export default function Container() {
  return (
    <div className="MainContainer">
      <div class="container">
        <form className="inputBox" id="search-form">
          <input
            type="search"
            placeholder="Search a city..."
            className="textbox"
            autoComplete="off"
            autoFocus
          />
          <input type="submit" id="button" value="🔎" />
          <input type="submit" id="button-loc" value="Current Location" />
        </form>
        <div className="InnerContainer">
          <h6 className="dateTime">
            <span className="fullDate">Dec 26, 2020</span>
            <br />
            <span className="time">13:00</span>
          </h6>
          <h1 className="city">Atlanta</h1>
          <h6 id="weather">Sunny</h6>
          <h2 className="currentTemp">
            <span id="current-temp">55</span>
            <span href="#" id="f-link" className="active">
              °F
            </span>
            <span className="line">|</span>
            <span href="#" id="c-link">
              °C
            </span>
          </h2>
          <i className="" id="main-icon"></i>
          <br />
          <br />
          <span className="wind">Wind: 5 mph</span> <br />
          <span className="humidity">Humidity: 5%</span>
        </div>
      </div>
    </div>
  );
}
