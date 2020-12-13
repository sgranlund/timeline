export const questionSource = {
	apiCall(param) {
		return fetch("http://numberapi.com/" + param + "/year?json")
			.then((response) => response.json())
			.catch((err) => console.warn("error fetching" + err));
	},

	searchYear(year) {
		if (typeof year !== "number") {
			year = "random";
		}

		return this.apiCall(year);
	},
};
