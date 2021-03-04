import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function MainContainer() {
  return (
    <Container fluid className="primary-container">
      <Row>
        <Col sm="auto">
          <form className="inputBox" id="search-form">
            <input
              type="search"
              placeholder="Search a city..."
              className="textbox"
              autoComplete="off"
              autoFocus
            />
            <input type="submit" id="button" value="GO" />
            <input type="submit" id="button-loc" value="Current Location" />
          </form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <Container>
                <Row xs={4}>
                  <Col>Sun</Col>
                  <Col xs={4}>Mon</Col>
                  <Col xs={4}>Tues</Col>
                </Row>
                <Row xs={4}>
                  <Col>Wed</Col>
                  <Col xs={4}>Thurs</Col>
                  <Col xs={4}>Fri</Col>
                </Row>
                <Row xs={4}>
                  <Col>Sat</Col>
                </Row>
              </Container>
            </Col>
            {/* main icon column */}
            <Col className="main-icon">
              <img src="https://freepngimg.com/thumb/categories/2275.png" />
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
