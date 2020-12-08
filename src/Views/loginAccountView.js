import { Form, Button, Card, Alert } from "react-bootstrap";
export const LoginAccountView = ({
	loading,
	error,
	currentUser,
	logEmailRef,
	logPasswordRef,
	logIn,
}) => (
	<Card className="login">
		<Card.Body>
			<h2>Login</h2>
			{currentUser.email}
			{error && <Alert variant="danger ">{error}</Alert>}
			<Form className="loginForm" onSubmit={logIn}>
				<Form.Group id="email">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" ref={logEmailRef} required />
				</Form.Group>
				<Form.Group id="pass">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" ref={logPasswordRef} required />
				</Form.Group>
				<Button id="sign" disable={loading.toString()} type="submit">
					Login
				</Button>
			</Form>
		</Card.Body>
	</Card>
);
