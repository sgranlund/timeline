import abra from "../images/abra.jpg";
import berlin from "../images/berlinmuren.jpg";
import caesar from "../images/caesar.jpg";
import hendrix from "../images/hendrix.jpeg";
import iphone from "../images/iphone.jpg";
import pyramid from "../images/pyramid.jpg";
import { Form, Button, Card, Alert } from "react-bootstrap";

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

			<svg
				id="timelineLogo"
				height="111"
				viewBox="0 0 581 111"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M498.901 108.012H501.401V105.512V5V2.5H498.901H485.797H483.297V5V76.4564L435.179 3.62195L434.438 2.5H433.093H419.989H417.489V5V105.512V108.012H419.989H433.093H435.593V105.512V33.9241L483.71 106.888L484.451 108.012H485.797H498.901Z"
					stroke="white"
					strokeWidth="5"
				/>
				<path
					d="M400.155 5.14398V2.64398H397.655H384.551H382.051V5.14398V105.512V108.012H384.551H397.655H400.155V105.512V5.14398Z"
					stroke="white"
					strokeWidth="5"
				/>
				<path
					d="M373.135 94.856V92.356H370.635H337.999V5.14398V2.64398H335.499H322.395H319.895V5.14398V105.512V108.012H322.395H370.635H373.135V105.512V94.856Z"
					stroke="white"
					strokeWidth="5"
				/>
				<path
					d="M300.747 49.352V46.852H298.247H264.171V18.3H302.567H305.067V15.8V5V2.5H302.567H248.567H246.067V5V105.512V108.012H248.567H302.567H305.067V105.512V94.712V92.212H302.567H264.171V62.652H298.247H300.747V60.152V49.352Z"
					stroke="white"
					strokeWidth="5"
				/>
				<path
					d="M228.844 5.86401V3.36401H226.344H212.376H210.756L210.094 4.84275L175.512 82.1122L140.93 4.84275L140.268 3.36401H138.648H124.536H122.036V5.86401V105.512V108.012H124.536H137.64H140.14V105.512V42.7876L168.621 106.532L169.283 108.012H170.904H180.12H181.743L182.403 106.53L210.74 42.9574V105.512V108.012H213.24H226.344H228.844V105.512V5.86401Z"
					stroke="white"
					strokeWidth="5"
				/>
				<path
					d="M104.702 5.14398V2.64398H102.202H89.0983H86.5983V5.14398V105.512V108.012H89.0983H102.202H104.702V105.512V5.14398Z"
					stroke="white"
					strokeWidth="5"
				/>
				<path
					d="M75.468 5.14398V2.64398H72.968H5H2.5V5.14398V15.8V18.3H5H30.004V105.512V108.012H32.504H45.608H48.108V105.512V18.3H72.968H75.468V15.8V5.14398Z"
					stroke="white"
					strokeWidth="5"
				/>
				<path
					d="M573.419 49.352V46.852H570.919H536.843V18.3H575.239H577.739V15.8V5V2.5H575.239H521.239H518.739V5V105.512V108.012H521.239H575.239H577.739V105.512V94.712V92.212H575.239H536.843V62.652H570.919H573.419V60.152V49.352Z"
					stroke="white"
					strokeWidth="5"
				/>
			</svg>
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
							<Form className="loginForm">
								<h3 className="h3text">PLAY GAME</h3>
								<Button id="sign" href="/loginAcc">
									Continue Game
								</Button>
								<Button id="sign" href="/createAcc">
									Create new game
								</Button>
								<Button id="sign" type="submit" href="/rules">
									How to play
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
