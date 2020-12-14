import { ReactComponent as Logo } from "../Assets/timeline.svg";

export const RuleView = ({ goBack }) => {
	return (
		<div className="rulesBackdrop">
			<div id="stars"></div>
			<div id="stars2"></div>
			<div id="stars3"></div>
			<Logo
				id="timelineHomeButton"
				onClick={() => (window.location.pathname = "")}
			/>
			<h3 className="rulesTitle">How to play</h3>
			<h3 className="Idea">The Game Idea</h3>
			<div className="bread">
				<p className="left">
					Take turns drawing cards and form a timeline with five different
					events. Put the events in chronological order. You do not need to know
					the years, but only be able to place them in chronological order.
				</p>
				<p className="right">
					You can stand a chance of winning several cards at a time and at the
					same time risk losing all of them or play it safe and win a single
					card at a time. Whoever first gets five cards wins a game!
				</p>
			</div>
			<h3 className="Course">The Course of The Game</h3>
			<div className="bread">
				<p className="left">
					Every player starts of with one event.Then the players take turns
					drawing cards from the card stack. Every player gets to draw as many
					cards as they want from the card stack.
				</p>
				<p className="right">
					When they feel they have placed the events in chronological order at
					their timeline they press LOCK IN. If they are right they keep all the
					drawn events. If they are wrong they lose all the drawn events.
				</p>
			</div>
			<div className="divButton">
				<div className="backButton" onClick={()=>goBack()}>
					<p className="backTo">Go Back!</p>
				</div>
			</div>
		</div>
	);
};
