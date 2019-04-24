import React, { Component } from "react";
import ReactDOM from "react-dom";
// importign the button class that we built previously
import Button from "../component/Button.jsx";

class Home extends Component {
  render() {
    return (
      <div id="main_wrapper">
        <h1>Hello Wold</h1>
        <Button />
      </div>
    );
  }
}

export default Home;

// responsible in finding the DOM that we will render to
const wrapper = document.getElementById("react_container");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;
