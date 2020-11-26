import React from "react";
import { LandingPageView } from "../Views/landingPageView.js";
//import { questionSource } from "../apiHandling";
import { signin } from "../AUTH/gameAuth";
export function LandingPage() {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  return (
    <LandingPageView
      onText={(text) => {
        //console.log(text);
      }}
      onKeyEmail={(event) => {
        if (event.key === "Enter") {
          console.log("email", event.target);
        }
      }}
      onKeyPass={(event) => {
        if (event.key === "Enter") {
          console.log("Password", event.target.value);
        }
      }}
      onFormChangeEmail={(e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
      }}
      onFormChangePass={(e) => {
        console.log(e.target.value);
        setPass(e.target.value);
      }}
      onFormSubmit={(e) => {
        e.preventDefault();
        signin(email, pass);
        console.log("loggedin");
      }}
    />
  );
}
//Just a test case for trying out the numbersAPI
// onKey={(event) => {
//   if (event.key === "Enter") {
//     questionSource.searchYear(event.target.value).then((year) => {
//       console.log("This", year.text.replace(year.number, ""));
//     });
//   }
// }}
