import React from "react";
import "./styles.css";
import Container from "./Container";
import Forecast from "./Forecast";
import GithubLink from "./GithubLink";

export default function App() {
  return (
    <div className="App">
      <Container />
      <Forecast />
      <GithubLink />
    </div>
  );
}
