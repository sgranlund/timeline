import { Form, Button, Card, Alert } from "react-bootstrap";
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
	<Card className="login">
		<Card.Body>
			{console.log(currentUser)}
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
				<Button
					id="signIn"
					disable={loading.toString()}
					type="submit"
					onClick={() => startGame(currentUser)}
				>
					Login
				</Button>
				<Button id="signOut" variant="link" onClick={logginOut}>
					Logout
				</Button>
			</Form>
		</Card.Body>
	</Card>
);
