export function promiseNoData(promise, data, error) {
	console.log("prommfunc", promise, data, error);
	return (
		(promise == {} && (
			<img src="http://www.csc.kth.se/~cristi/loading.gif" />
		)) || // case "0"
		(error && <h1>{error}</h1>) || // case 3
		(data == {} && <img src="http://www.csc.kth.se/~cristi/loading.gif" />) // case 1
	);
}
