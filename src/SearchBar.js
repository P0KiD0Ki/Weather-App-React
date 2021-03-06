import React from "react";
import { Row, Col } from "react-bootstrap";

export default function SearchBar() {
  return (
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
  );
}
