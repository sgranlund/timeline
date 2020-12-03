import abra from "../images/abra.jpg";
import berlin from "../images/berlinmuren.jpg";
import caesar from "../images/caesar.jpg";
import hendrix from "../images/hendrix.jpeg";
import iphone from "../images/iphone.jpg";
import pyramid from "../images/pyramid.jpg";
import { signin } from "../AUTH/gameAuth";
export const LandingPageView = ({
	onText,
	onFormChangeEmail,
	onFormChangePass,
	onFormSubmitLogin,
	onFormSubmitCreate,
}) => (
	<div className="landing">
		<div className="topRow">
			<div>
				<img src={abra} alt="abra"></img>
			</div>
			<div>
				<img src={berlin} alt="berlin"></img>
			</div>
			<div>
				<img src={caesar} alt="caesar"></img>
			</div>
		</div>
		<div className="title">
			<span>Timeline</span>
		</div>
		<div className="botRow">
			<div>
				<img src={hendrix} alt="hendrix"></img>
			</div>
			<div>
				<img src={iphone} alt="iphone"></img>
			</div>
			<div>
				<img src={pyramid} alt="pyramid"></img>
			</div>
		</div>
		<div className="buttons">
			<div className="continue">
				<div className="gameName">
					<span class="formHeader">Log in</span>
					<form onSubmit={(e) => onFormSubmitLogin(e)}>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							onChange={(event) => onFormChangeEmail(event)}
						></input>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							onChange={(event) => onFormChangePass(event)}
						></input>
						<button>login</button>
					</form>
				</div>
			</div>
			<div className="continue">
				<div className="gameName">
					<span class="formHeader">Create user</span>
					<form onSubmit={(e) => onFormSubmitCreate(e)}>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							onChange={(event) => onFormChangeEmail(event)}
						></input>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							onChange={(event) => onFormChangePass(event)}
						></input>
						<button>login</button>
					</form>
				</div>
			</div>
		</div>
		<div className="divButton">
			<a href="./rules" class="backButton bouncy">
				How to play
			</a>
		</div>
	</div>
);
