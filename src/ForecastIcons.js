import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function MainIcon(props) {
  const iconCodeMapping = {
    "t01d": "RAIN",
    "t01n": "RAIN",
    "t02d": "RAIN", 
    "t02n": "RAIN",
    "t03d": "RAIN",
    "t03n": "RAIN",
    "t04d": "RAIN", 
    "t04n": "RAIN",
    "t05d": "RAIN", 
    "t05n": "RAIN",
    "d01d": "RAIN", 
    "d01n": "RAIN",
    "d02d": "RAIN", 
    "d02n": "RAIN",
    "d03d": "RAIN", 
    "d03n": "RAIN",
    "r01d": "RAIN", 
    "r01n": "RAIN",
    "r02d": "RAIN", 
    "r02n": "RAIN",
    "r03d": "RAIN", 
    "r03n": "RAIN",
    "f01d": "RAIN", 
    "f01n": "RAIN",
    "r04d": "RAIN", 
    "r04n": "RAIN",
    "r05d": "RAIN", 
    "r05n": "RAIN",
    "r06d": "RAIN", 
    "r06n": "RAIN",
    "s01d": "SNOW", 
    "s01n": "SNOW",
    "s02d": "SNOW", 
    "s02n": "SNOW",
    "s03d": "SNOW", 
    "s03n": "SNOW",
    "s04d": "SNOW", 
    "s04n": "SNOW",
    "s05d": "SLEET", 
    "s05n": "SLEET",
    "s06d": "SNOW", 
    "s06n": "SNOW",
    "a01d": "FOG", 
    "a01n": "FOG",
    "a02d": "FOG", 
    "a02n": "FOG",
    "a03d": "FOG", 
    "a03n": "FOG",
    "a04d": "FOG", 
    "a04n": "FOG",
    "a05d": "FOG", 
    "a05n": "FOG",
    "a06d": "FOG",
    "a06n": "FOG",
    "c01d": "CLEAR_DAY",
    "c01n": "CLEAR_NIGHT",
    "c02d": "PARTLY_CLOUDY_DAY",
    "c02n": "PARTLY_CLOUDY_NIGHT",
    "c03d": "CLOUDY",
    "c03n": "CLOUDY",
    "c04d": "CLOUDY", 
    "c04n": "CLOUDY",
    "u00d": "WIND",
    "u00n": "WIND"


  };


  return (
    <ReactAnimatedWeather
      icon={iconCodeMapping[props.code]}
      color="#9a5e6d"
      size="30px"
      animate={true}
    />
  );
}
