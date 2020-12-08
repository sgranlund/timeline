import { Form, Button, Card, Alert } from "react-bootstrap";
export const CreateAccountView = ({
	createEmailRef,
	createPasswordRef,
	passwordConfirmRef,
	submitting,
	loading,
	error,
	currentUser,
}) => (
	<Card className="create">
		<Card.Body>
			<h2>Sign Up</h2>
			{currentUser.email}
			{error && <Alert variant="danger ">{error}</Alert>}
			<Form className="createForm" onSubmit={submitting}>
				<Form.Group id="email">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" ref={createEmailRef} required />
				</Form.Group>
				<Form.Group id="pass">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" ref={createPasswordRef} required />
				</Form.Group>
				<Form.Group id="passwordConfirm">
					<Form.Label>Confirm</Form.Label>
					<Form.Control type="password" ref={passwordConfirmRef} required />
				</Form.Group>
				<Button id="sign" disable={loading.toString()} type="submit">
					Sign up
				</Button>
			</Form>
		</Card.Body>
	</Card>
);
