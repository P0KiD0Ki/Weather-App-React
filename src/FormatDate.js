import React from "react";

export default function FormatDate(props) {
  let days = ["Sun.", "Mon.", "Tue.", "Wed.", "Thur.", "Fri.", "Sat."];
  let day = days[props.date.getDay()];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let month = months[props.date.getMonth()];

  let date = props.date.getDate();

  let year = props.date.getFullYear();

  return (
    <span>
      {day} {month} {date}, {year}
    </span>
  );
}
