import React from "react";
import "./css/gameBoard.css";
import "./css/createGame.css";
import "./css/rules.css";
import { LandingPage } from "./Presenters/landingPage";
import { CreateGame } from "./Presenters/createGame";
import { GameFinish } from "./Presenters/gameFinished";
import { GameBoard } from "./Presenters/gameBoard";
import { Rules } from "./Presenters/rules";
import { Test } from "./Presenters/test";
import "./css/main.css";
import "./css/test.css";
import "./css/landingPage.css";
import "./css/login.css";
import "./css/gameFinish.css";
import "./css/createUser.css";
//import "rc-slider/assets/index.css";
import "./css/slider.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./AUTH/AuthProv";
import { CreateAccount } from "./Presenters/createAccount";
import { LoginAccount } from "./Presenters/loginAccount";

function App({ model }) {
	return (
		<div className="App">
			<header className="App-header">
				{/*<img src={logo} className="App-logo" alt="logo" />*/}
				{/* <Counter /> */}
			</header>
			<AuthProvider>
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
						<Route path="/createAcc">
							<CreateAccount />
						</Route>
						<Route path="/loginAcc">
							<LoginAccount />
						</Route>
						<Route path="/landingPage">
							<LandingPage />
						</Route>
						<Route path="/">
							<Test />
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
