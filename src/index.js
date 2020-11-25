//import store from "./app/store";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { GameModel } from "./GameModel";

const model = new GameModel();



ReactDOM.render(
  <React.StrictMode>
      <App model={model} />
  </React.StrictMode>,
  document.getElementById("root")
);
