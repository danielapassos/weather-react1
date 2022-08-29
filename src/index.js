import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>Final lesson week 4</h1>
      <Search />
      <small><a href="https://github.com/danielapassos/weather-react1">Open Source code</a> by Daniela Passos</small>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
