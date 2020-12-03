import React from "react";
import logo from "./images/timeline.webp";
//import { Counter } from "./features/counter/Counter";
//mport "./css/App.css";
import "./css/gameBoard.css";
import "./css/createGame.css"
import "./css/rules.css";
import { LandingPage } from "./Presenters/landingPage";
import { CreateGame } from "./Presenters/createGame";
import { GameFinish } from "./Presenters/gameFinished";
import { GameBoard } from "./Presenters/gameBoard";
import { Rules } from "./Presenters/rules";
import "./css/main.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App({ model }) {
	return (
		<div className="App">
			<header className="App-header">
				{/*<img src={logo} className="App-logo" alt="logo" />*/}
				{/* <Counter /> */}
			</header>
			<Router>
				<Switch>
					<Route path="/createGame">
						<CreateGame model={model} />
					</Route>
					<Route path="/gameFinish">
						<GameFinish />
					</Route>

					<Route path="/gameBoard">
						<GameBoard model={model} />
					</Route>
					<Route path="/rules">
						<Rules />
					</Route>
					<Route path="">
						<LandingPage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
