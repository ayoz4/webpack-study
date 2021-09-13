import "./styles/test.css";
import "./styles/scss.scss";
import React from "react";
import { render } from "react-dom";
import "./babel";
import "./test";

console.log("Test 1");
console.log("Test 1");
console.log("Test 1");
console.log("Test 1");
console.log("Test 1");
console.log("Test 1");
console.log("Test 1");

const App = () => (
  <div class="container">
    Webpack Example App
    <hr />
    <div class="logo"></div>
    <div class="sass">
      <h1>SASS</h1>
    </div>
  </div>
);

render(<App />, document.getElementById("app"));
