import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function MainContainer() {
  return (
    <Container>
      <Row>
        <Col md="auto">
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
        <Col></Col>
        <Col>
          <h6 className="dateTime">
            <span className="fullDate">Dec 26, 2020</span>
            <br />
            <span className="time">13:00</span>
          </h6>
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>
          <h1 className="city">Atlanta</h1>
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>
          <h6 id="weather">Sunny</h6>
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>
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
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>
          <span className="wind">Wind: 5 mph</span> <br />
          <span className="humidity">Humidity: 5%</span>
        </Col>
      </Row>
      
    </Container>
  );
}
