import { Form, Button, Card, Alert } from "react-bootstrap";
import homeLogo from "../images/iconfinder_Home.svg";
import { ReactComponent as Logo } from "../images/timeline.svg";
export const LoginAccountView = ({
	loading,
	error,
	currentUser,
	logEmailRef,
	logPasswordRef,
	logIn,
	logginOut,
	startGame,
}) => (
	<div>
		<div id="stars"></div>
		<div id="stars2"></div>
		<div id="stars3"></div>
		<Logo
			id="timelineHomeButton"
			onClick={() => (window.location.pathname = "")}
		/>

		<Card className="login">
			<Card.Body>
				{currentUser ? (
					<div className="playGame">
						<h1>Logged in as {currentUser.email}</h1>
						<Button id="play" onClick={() => startGame(currentUser)}>
							Play Game!
						</Button>
					</div>
				) : (
					<div>
						<Form className="loginFormLog" onSubmit={logIn}>
							<h3>Login</h3>

							<Form.Group id="emailLog">
								{error && <Alert variant="danger ">{error}</Alert>}
								<Form.Label>Email</Form.Label>
								<Form.Control type="email" ref={logEmailRef} required />
							</Form.Group>
							<Form.Group id="passLog">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" ref={logPasswordRef} required />
							</Form.Group>

							<Button
								id="signIn"
								disable={loading.toString()}
								onClick={() => startGame(currentUser)}
								type="submit"
							>
								Login
							</Button>
						</Form>
						<a className="linkTocreate" href="/createAcc">
							Not a user click here to create new user
						</a>
					</div>
				)}
			</Card.Body>
		</Card>
	</div>
);
