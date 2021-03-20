import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function MainIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  const colorMapping = {
    "01d": "#EBCE00",
    "01n": "#385B69",
    "02d": "#A5AFC4",
    "02n": "#656B78",
    "03d": "#7A8191",
    "03n": "#3A3E45",
    "04d": "#7A8291",
    "04n": "#4F555E",
    "09d": "#17D2EB",
    "09n": "#2B646B",
    "10d": "#12A4B8",
    "10n": "#163438",
    "11d": "#466063",
    "11n": "#1E454A",
    "13d": "#DEDEDE",
    "13n": "#898B91",
    "50d": "#999999",
    "50n": "#4D4D4D",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color={colorMapping[props.code]}
      size="225px"
      animate={props.animate}
    />
  );
}
