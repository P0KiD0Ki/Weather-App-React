import React, { useState } from "react";

export default function TempUnit(props) {
  const [unit, setUnit] = useState("imperial");

  function celsConvert(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrConvert(event) {
    event.stopPropagation();
    setUnit("imperial");
  }

  if (unit === "imperial") {
    return (
      <h2 className="currentTemp">
        <span id="current-temp">{props.fahrenheit}</span>
        <span id="f-link" className="active">
          °F
        </span>
        <span className="line">|</span>
        <span id="c-link">
          <a href="/" onClick={celsConvert}>
            °C
          </a>
        </span>
      </h2>
    );
  } else {
    return (
      <h2 className="currentTemp">
        <span id="current-temp">
          {Math.round(((props.fahrenheit - 32) * 5) / 9)}
        </span>
        <span id="f-link" className="active">
          <a href="/" onclick={fahrConvert}>
            °F
          </a>
        </span>
        <span className="line">|</span>
        <span id="c-link">°C</span>
      </h2>
    );
  }
}
