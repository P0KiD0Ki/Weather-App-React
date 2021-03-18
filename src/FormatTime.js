import React from "react";

export default function FormatTime(props) {
  let hours = props.time.getHours();
  let minutes =
    (props.time.getMinutes() < 10 ? "0" : "") + props.time.getMinutes();
  return (
    <div>
      {hours}:{minutes}
    </div>
  );
}
