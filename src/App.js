import React from "react";
import logo from "./images/timeline.webp";
//import { Counter } from "./features/counter/Counter";
import "./css/App.css";
import { LandingPage } from "./Presenters/landingPage";
import "./css/main.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/* <Counter /> */}
      </header>
      <LandingPage />
    </div>
  );
}

export default App;
