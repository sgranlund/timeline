import { questionSource } from "./apiHandling";
import { GetPromise } from "./getPromise";
import { dataDeliv } from "./dataDelivered";
import React from "react";

export const CreateCards = (myData, counter) => {
	const [promise, setPromise] = React.useState(null);

	React.useEffect(
		() =>
			setPromise(
				questionSource.searchYear(Math.floor(Math.random() * 2000) + counter)
			),
		[]
	);

	const [data, error] = GetPromise(promise);
	console.log("promise", promise);
	console.log("data", data);

	if (dataDeliv(data)) {
		myData.events.event3.content = "This" + data.text.replace(data.number, "");

		myData.events["event" + String(counter)] = {
			id: "event" + String(counter),
			content: "This" + data.text.replace(data.number, ""),
		};
	}

	console.log("myData", counter, myData.events);

	return myData;
};
