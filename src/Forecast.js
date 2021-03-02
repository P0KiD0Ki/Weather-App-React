import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
      {/* sunday */}
      <div className="row">
        <div className="col-4">
          <span className="dayOfWeek">S:</span>
          <img src="" alt="" id="sun-icon" />
          <span className="temp">
            <span className="sun-hi">55</span>° /
            <span className="sun-lo">55</span>°
          </span>
        </div>
      </div>
      {/* monday */}
      <div className="row">
        <div className="col-4">
          <span className="dayOfWeek">M:</span>
          <img src="" alt="" id="mon-icon" />
          <span className="temp">
            <span className="mon-hi">55</span>° /
            <span className="mon-lo">55</span>°
          </span>
        </div>
      </div>
      {/* tuesday */}
      <div className="row">
        <div className="col-4">
          <span className="dayOfWeek">T:</span>
          <img src="" alt="" id="tues-icon" />
          <span className="temp">
            <span className="tues-hi">55</span>° /
            <span className="tues-lo">55</span>°
          </span>
        </div>
      </div>
      {/* wednesday */}
      <div className="row">
        <div className="col-4">
          <span className="dayOfWeek">W:</span>
          <img src="" alt="" id="wed-icon" />
          <span className="temp">
            <span className="wed-hi">55</span>° /
            <span className="wed-lo">55</span>°
          </span>
        </div>
      </div>
      {/* thursday */}
      <div className="row">
        <div className="col-4">
          <span className="dayOfWeek">Th:</span>
          <img src="" alt="" id="thurs-icon" />
          <span className="temp">
            <span className="thur-hi">55</span>° /
            <span className="thur-lo">55</span>°
          </span>
        </div>
      </div>
      {/* friday */}
      <div className="row">
        <div className="col-4">
          <span className="dayOfWeek">F:</span>
          <img src="" alt="" id="fri-icon" />
          <span className="temp">
            <span className="fri-hi">55</span>° /
            <span className="fri-lo">55</span>°
          </span>
        </div>
      </div>
      {/* saturday */}
      <div className="row">
        <div className="col-4">
          <span className="dayOfWeek">S:</span>
          <img src="" alt="" id="sat-icon" />
          <span className="temp">
            <span className="sat-hi">55</span>° /
            <span className="sat-lo">55</span>°
          </span>
        </div>
      </div>
    </div>
  );
}
