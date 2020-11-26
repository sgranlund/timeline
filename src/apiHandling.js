export const questionSource = {
  apiCall(param) {
    return fetch("http://numberapi.com/" + param + "/year?json")
      .then((response) => response.json())
      .catch((err) => console.warn("error fetching" + err));
  },

  searchYear(year) {
    //console.log(year);

    if (!year) {
      year = 1997;
    }
    const x = this.apiCall(year);

    x.then((year) => {
      console.log("the year", year.text);
    });

    return x;
  },
};
