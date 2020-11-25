import React from "react";
import { LandingPageView } from "../Views/landingPageView.js";

//const h = React.createElement;

export function LandingPage() {
  //const [query, setQuery]= React.useState("");
  return (
    <LandingPageView
      onText={(text) => {
        console.log(text);
      }}
    />
  );
}
