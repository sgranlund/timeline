import { logDOM } from "@testing-library/react";
import React from "react";
import { TestView } from "../Views/testView";
import { questionSource } from "../apiHandling";
import { GetPromise } from "../getPromise";
import { dataDeliv } from "../dataDelivered";
import { promiseNoData } from "../Views/promiseNoData";
export function Test() {
	const [promise1, setPromise1] = React.useState(null);
	const [promise2, setPromise2] = React.useState(null);
	const [promise3, setPromise3] = React.useState(null);
	const [promise4, setPromise4] = React.useState(null);

	React.useEffect(() => {
		setPromise1(questionSource.searchYear(1809));
		setPromise2(questionSource.searchYear(2007));
		setPromise3(questionSource.searchYear(100));
		setPromise4(questionSource.searchYear(1989));
	}, []);

	//Pulls out the data from the promise
	const [data1, error1] = GetPromise(promise1);
	const [data2, error2] = GetPromise(promise2);
	const [data3, error3] = GetPromise(promise3);
	const [data4, error4] = GetPromise(promise4);

	// const logo = document.querySelectorAll("#timelineLogo path");
	// for (let i = 0; i < logo.length; i++) {
	// 	console.log(` ${logo[i].getTotalLength()}`);
	// }
	return (
		<TestView
			data1={data1}
			error1={error1}
			promise1={promise1}
			data2={data2}
			error2={error2}
			promise2={promise2}
			data3={data3}
			error3={error3}
			promise3={promise3}
			data4={data4}
			error4={error4}
			promise4={promise4}
		/>
	);
}
