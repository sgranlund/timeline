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
		<div className="gameFinishedTitle">
			<span>Congratulations</span>
		</div>
		<div className="result">
			<span className="resultTitle"></span>
			<ul class="c-rainbow">
				<li class="c-rainbow__layer c-rainbow__layer--white">
					{countWinner()}
				</li>
				<li class="c-rainbow__layer c-rainbow__layer--orange">
					{countWinner()}
				</li>
				<li class="c-rainbow__layer c-rainbow__layer--red">{countWinner()}</li>
				<li class="c-rainbow__layer c-rainbow__layer--violet">
					{countWinner()}
				</li>
				<li class="c-rainbow__layer c-rainbow__layer--blue">{countWinner()}</li>
				<li class="c-rainbow__layer c-rainbow__layer--green">
					{countWinner()}
				</li>
				<li class="c-rainbow__layer c-rainbow__layer--yellow">
					{countWinner()}
				</li>
			</ul>
			{/* <span className="theWinner">{countWinner()}</span> */}
			<span className="winnerIs">you won!</span>
		</div>
		<div className="newGameButton">
			<a href="/createGame" className="newButton">
				New game
			</a>
		</div>
	</div>
);
