import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Forecast() {
  return (

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
  );
}
