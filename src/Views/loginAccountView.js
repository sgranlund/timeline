import { Form, Button, Card, Alert } from "react-bootstrap";
import homeLogo from "../images/iconfinder_Home.svg";
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
		<img src={homeLogo} onClick={() => (window.location.pathname = "")}></img>
		<Card className="login">
			<Card.Body>
				{currentUser && currentUser.email}

				{error && <Alert variant="danger ">{error}</Alert>}
				<Form className="loginFormLog" onSubmit={logIn}>
					<h3>Login</h3>
					<Form.Group id="emailLog">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" ref={logEmailRef} required />
					</Form.Group>
					<Form.Group id="passLog">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" ref={logPasswordRef} required />
					</Form.Group>
					{currentUser ? (
						<div></div>
					) : (
						<Button
							id="signIn"
							disable={loading.toString()}
							onClick={() => startGame(currentUser)}
							type="submit"
						>
							Login
						</Button>
					)}
					{currentUser ? (
						<Button id="signIn" onClick={() => startGame(currentUser)}>
							Play Game!
						</Button>
					) : (
						<Button
							id="signIn"
							onClick={() => (window.location.pathname = "/createAcc")}
						>
							Not a user click here to create new user
						</Button>
					)}
					<Button id="signOut" variant="link" onClick={logginOut}>
						Logout
					</Button>
				</Form>
			</Card.Body>
		</Card>
	</div>
);
