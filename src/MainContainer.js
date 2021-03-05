import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function MainContainer() {
  return (
    <Container fluid className="primary-container">
      <Row>
        <Col xs="auto">
          <form className="inputBox" id="search-form">
            <input
              type="search"
              placeholder="Search a city..."
              className="textbox"
              autoComplete="off"
              autoFocus
            />
            <input type="submit" id="button" value="GO" />
            <button id="button-loc">
              <i class="fas fa-crosshairs"></i>
            </button>
          </form>
        </Col>
      </Row>
      {/* forecast grid */}
      <Row>
        <Col>
          <Row>
            <Col>
              <Container className="forecast">
                <Row>
                  <Col xs={4} className="day-box">
                    <strong className="day">Sun</strong>
                    <br />
                    55° / 55°
                    <br />
                    icon
                  </Col>
                  <Col xs={4} className="day-box">
                    <strong className="day">Mon</strong>
                    <br />
                    55° / 55°
                    <br />
                    icon
                  </Col>
                  <Col xs={4} className="day-box">
                    <strong className="day">Tues</strong>
                    <br />
                    55° / 55°
                    <br />
                    icon
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col xs={4} className="day-box">
                    <strong className="day">Wed</strong>
                    <br />
                    55° / 55°
                    <br />
                    icon
                  </Col>
                  <Col xs={4} className="day-box">
                    <strong className="day">Thurs</strong>
                    <br />
                    55° / 55°
                    <br />
                    icon
                  </Col>
                  <Col xs={4} className="day-box">
                    <strong className="day">Fri</strong>
                    <br />
                    55° / 55°
                    <br />
                    icon
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col xs={4} className="day-box">
                    <strong className="day">Sat</strong>
                    <br />
                    55° / 55°
                    <br />
                    icon
                  </Col>
                </Row>
              </Container>
            </Col>
            {/* main icon column */}
            <Col className="main-icon">
              <img
                src="https://freepngimg.com/thumb/categories/2275.png"
                alt="weather"
              />
            </Col>
          </Row>
        </Col>
        {/* main container for weather data */}
        <Col className="strong-side">
          <h6 className="dateTime">
            <span className="fullDate">Dec 26, 2020</span>
            <br />
            <span className="time">13:00</span> <br />
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
            <span className="wind-humidity">
              Wind: 5 mph <br />
              Humidity: 5%
            </span>
          </h6>
        </Col>
      </Row>
    </Container>
  );
}
