import { ReactComponent as Logo } from "../images/timeline.svg";

export const RuleView = () => {
	return (
		<div>
			<div id="stars"></div>
			<div id="stars2"></div>
			<div id="stars3"></div>
			<Logo
				id="timelineHomeButton"
				onClick={() => (window.location.pathname = "")}
			/>
			<h3 className="rulesTitle">How to play</h3>
			<h3 className="Idea">The Game Idea</h3>
			<p className="bread">
				<p>
					Take turns drawing cards and form a timeline with ten different
					events. Put the events in chronological order. You do not need to know
					the years, but only be able to place them in the right relationship to
					each other.
				</p>
				<p>
					You can stand a chance of winning several cards at a time and at the
					same time risk losing all of them or play it safe and win a single
					card at a time. Whoever first gets ten cards wins a game!
				</p>
			</p>
			<h3 className="Course">The Course of The Game</h3>
			<p className="bread">
				<p>
					Every player starts of with one event.Then the players take turns
					drawing cards from the card stack. Every player gets to draw as many
					cards as they want from the card stack.
				</p>
				<p>
					When they feel they have placed the events in order at their timeline
					they press the button. If they are right they keep all the drawn
					events. If they are wrong they lose all the drawn events.
				</p>
			</p>
			<div className="divButton">
				<button
					className="backButton bouncy"
					onClick={() => window.history.back()}
					
				>
					Go Back!
				</button>
			</div>
		</div>
	);
};
