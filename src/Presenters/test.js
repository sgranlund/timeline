import React from "react";
import { TestView } from "../Views/testView";
import { questionSource } from "../apiHandling";
import { GetPromise } from "../getPromise";

export function Test() {
	const [promise1, setPromise1] = React.useState(null);
	const [promise2, setPromise2] = React.useState(null);
	const [promise3, setPromise3] = React.useState(null);
	const [promise4, setPromise4] = React.useState(null);

	React.useEffect(() => {
		setPromise1(questionSource.searchYear(1809));
		setPromise2(questionSource.searchYear(2007));
		setPromise3(questionSource.searchYear(1697));
		setPromise4(questionSource.searchYear(1989));
	}, []);

	//Pulls out the data from the promise
	const [data1] = GetPromise(promise1);
	const [data2] = GetPromise(promise2);
	const [data3] = GetPromise(promise3);
	const [data4] = GetPromise(promise4);

	// const logo = document.querySelectorAll("#timelineLogo path");
	// for (let i = 0; i < logo.length; i++) {
	// 	console.log(` ${logo[i].getTotalLength()}`);
	// }
	return <TestView data1={data1} data2={data2} data3={data3} data4={data4} />;
}
