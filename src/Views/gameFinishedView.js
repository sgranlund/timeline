import { ReactComponent as Logo } from "../images/timeline.svg";
export const GameFinishedView = ({
	name1,
	name2,
	pointsPlay1,
	pointsPlay2,
	countWinner,
	newGame,
}) => (
	<div className="gameFinish">
		<div id="stars"></div>
		<div id="stars2"></div>
		<div id="stars3"></div>
		<div class="fireworks">
			<div className="before"></div>
			<div className="after"></div>
		</div>
		<div class="fireworks2">
			<div className="before"></div>
			<div className="after"></div>
		</div>
		<Logo
			id="timelineHomeButton"
			onClick={() => (window.location.pathname = "")}
		/>

		<div className="result">
			<span className="gameFinishedTitle">Congratulations</span>
			<span className="theWinner">{countWinner()}</span>
			<span className="winnerIs">you're a real time wizard!</span>
		</div>
		<div className="score">
			<span className="score1">
				{name1} got {pointsPlay1} cards
			</span>
			<span className="score2">
				{name2} got {pointsPlay2} cards
			</span>
		</div>
		<div className="newGameButton">
			<a href="/createGame" className="newButton">
				New game
			</a>
		</div>
	</div>
);
