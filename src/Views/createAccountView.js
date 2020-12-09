import { Form, Button, Card, Alert } from "react-bootstrap";
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
		<Card.Body>
			{currentUser && currentUser.email}

			<Form className="createForm" onSubmit={submitting}>
				<h3>Sign Up</h3>
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
				<Button
					id="signCreate"
					disable={loading.toString()}
					type="submit"
					onClick={() => startGame(currentUser)}
				>
					Sign up
				</Button>
			</Form>
		</Card.Body>
	</Card>
);
