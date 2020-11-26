import React from "react";
import { LandingPageView } from "../Views/landingPageView.js";
import { questionSource } from "../apiHandling";
//const h = React.createElement;

export function LandingPage() {
  //const [query, setQuery]= React.useState("");
  return (
    <LandingPageView
      onText={(text) => {
        console.log(text);
      }}
      //Just a test case for trying out the numbersAPI
      onKey={(event) => {
        if (event.key === "Enter") {
          questionSource.searchYear(event.target.value).then((year) => {
            console.log("This", year.text.replace(year.number, ""));
          });
        }
      }}
    />
  );
}
