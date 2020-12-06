import abra from "../images/abra.jpg";
import berlin from "../images/berlinmuren.jpg";
import caesar from "../images/caesar.jpg";
import hendrix from "../images/hendrix.jpeg";
import iphone from "../images/iphone.jpg";
import pyramid from "../images/pyramid.jpg";
import { Form, Button, Card, Alert } from "react-bootstrap";

export const LandingPageView = ({
	createEmailRef,
	createPasswordRef,
	passwordConfirmRef,
	submitting,
	loading,
	error,
	currentUser,
	logEmailRef,
	logPasswordRef,
	logIn,
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

		<div className="Forms">
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
		</div>

		<div className="divButton">
			<a href="./rules" className="backButton bouncy">
				How to play
			</a>
		</div>
	</div>
);
