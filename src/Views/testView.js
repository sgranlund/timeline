import abra from "../Assets/abra.jpg";
import berlin from "../Assets/berlinmuren.jpg";
import bonneyAnne from "../Assets/bonneyAnne.jpg";
import iphone from "../Assets/iphone.jpg";
import { Form, Button, Card } from "react-bootstrap";
import { ReactComponent as Logo } from "../Assets/timeline.svg";
import { dataDeliv } from "../Model/API/dataDelivered";
export const TestView = ({ data1, data2, data3, data4 }) => {
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
					<img alt="berlin" src={berlin}></img>
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
					<img alt="iphone" src={iphone}></img>
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
					<img alt="bonneyAnne" src={bonneyAnne}></img>

					{dataDeliv(data3) && (
						<p className="text">
							The year Anne Bonney is born {data3.year}is also
							{data3.text.substr(data3.text.indexOf(" ") + 3)}
						</p>
					)}
				</div>
				<div className="attach">
					<hr className="attachLineNere" />
					<img alt="Lincoln" src={abra}></img>

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
