import abra from "../images/abra.jpg";
import berlin from "../images/berlinmuren.jpg";
import caesar from "../images/caesar.jpg";
import hendrix from "../images/hendrix.jpeg";
import iphone from "../images/iphone.jpg";
import pyramid from "../images/pyramid.jpg";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/timeline.svg";
import { dataDeliv } from "../dataDelivered";
export const TestView = ({
	getText,
	data1,
	error1,
	promise1,
	data2,
	error2,
	promise2,
	data3,
	error3,
	promise3,
	data4,
	error4,
	promise4,
}) => {
	return (
		<div className="apa">
			<div id="stars"></div>
			<div id="stars2"></div>
			<div id="stars3"></div>
			<Logo id="timelineLogo" />
			<Logo
				id="timelineHomeButton"
				onClick={() => (window.location.pathname = "")}
			/>
			<div className="uppe">
				<div className="attach">
					<hr className="attachLineUppe" />
					<img src={berlin}></img>
					{dataDeliv(data4) && (
						<p className="text">
							The year that the Berlin wall fell {data4.number} is also
							{data4.text.substr(data4.text.indexOf(" ") + 3)}
						</p>
					)}
				</div>
				<div className="attach">
					<Card className="login">
						<Card.Body>
							<Form className="testPlayGame">
								<Button id="sign" href="/loginAcc">
									<label>Play Game</label>
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</div>
				<div className="attach">
					<hr className="attachLineUppe" />
					<img src={iphone}></img>
					{dataDeliv(data2) && (
						<p className="text">
							The year that the Iphone is released {data2.number} is also
							{data2.text.substr(data2.text.indexOf(" ") + 3)}
						</p>
					)}
				</div>
			</div>

			<div className="nere">
				<div className="attach">
					<hr className="attachLineNere" />
					<img src={caesar}></img>

					{dataDeliv(data3) && (
						<p className="text">
							200 hundred years after Caesar is born {data3.number} f.kr is also
							{data3.text.substr(data3.text.indexOf(" ") + 3)}
						</p>
					)}
				</div>
				<div className="attach">
					<hr className="attachLineNere" />
					<img src={abra}></img>

					{dataDeliv(data1) && (
						<p className="text">
							The year that Abraham Lincoln is born {data1.number} is also
							{data1.text.substr(data1.text.indexOf(" ") + 3)}
						</p>
					)}
				</div>
			</div>
			<hr className="centerLine" />
		</div>
	);
};
