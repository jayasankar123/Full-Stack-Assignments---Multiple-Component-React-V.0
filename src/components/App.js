import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <>
        <h1 data-ns-test="project-name">ProjectName 1</h1>
        <p data-ns-test="project-description">ProjectDescription1</p>
        <h1 data-ns-test="project-name">ProjectName 2</h1>
        <p data-ns-test="project-description">ProjectDescription2</p>
      </>
    );
  }
}

export default App;
