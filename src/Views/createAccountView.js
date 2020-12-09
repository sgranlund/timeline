import { Form, Button, Card, Alert } from "react-bootstrap";
import homeLogo from "../images/iconfinder_Home.svg";
export const CreateAccountView = ({
	createEmailRef,
	createPasswordRef,
	passwordConfirmRef,
	submitting,
	loading,
	error,
	currentUser,
	startGame,
}) => (
	<Card className="create">
		<div id="stars"></div>
		<div id="stars2"></div>
		<div id="stars3"></div>
		<img src={homeLogo} onClick={() => (window.location.pathname = "")}></img>
		<Card.Body>
			{currentUser && currentUser.email}

			<Form className="createForm" onSubmit={submitting}>
				<h3>To create a new game please sign up</h3>
				<Form.Group id="emailCreate">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" ref={createEmailRef} required />
				</Form.Group>
				<Form.Group id="passCreate">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" ref={createPasswordRef} required />
				</Form.Group>
				<Form.Group id="passwordConfirm">
					<Form.Label>Confirm</Form.Label>
					<Form.Control type="password" ref={passwordConfirmRef} required />
				</Form.Group>
				{currentUser ? (
					<Button id="signCreate" onClick={() => startGame(currentUser)}>
						PlayGame
					</Button>
				) : (
					<Button id="signCreate" disable={loading.toString()} type="submit">
						Sign up
					</Button>
				)}
			</Form>
		</Card.Body>
	</Card>
);
