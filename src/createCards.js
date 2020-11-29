import { questionSource } from "./apiHandling";
import { GetPromise } from "./getPromise";
import { dataDeliv } from "./dataDelivered";
import React from "react";
const myData = {
	events: {
		event1: { id: "event1", content: "First event" },
		event2: { id: "event2", content: "Second event" },
		event3: { id: "event3", content: "Third event" },
	},
	columns: {
		column1: {
			id: "column1",
			title: "Player Timeline",
			eventIds: ["event1", "event2"],
		},
		column2: {
			id: "column2",
			title: "Card",
			eventIds: ["event3"],
		},
	},
	columnOrder: ["column1", "column2"],
};
export function CreateCards(numberCards) {
	for (let i = 1; i <= numberCards; i++) {
		const [promise, setPromise] = React.useState(null);
		React.useEffect(
			() =>
				setPromise(
					questionSource.searchYear(Math.floor(Math.random() * 2000) + 1000)
				),
			[]
		);

		const [data, error] = GetPromise(promise);
		console.log("promise", promise);
		setTimeout(200);
		if (dataDeliv(data)) {
			myData.events.event3.content =
				"This" + data.text.replace(data.number, "");

			myData.events["event" + String(i)] = {
				id: "event" + String(i),
				content: "This" + data.text.replace(data.number, ""),
			};
		}
	}
	console.log("myData", myData.events);

	return myData;
}
