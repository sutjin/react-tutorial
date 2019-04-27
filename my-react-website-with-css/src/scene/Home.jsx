import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "../component/Button.jsx";

import image from "../media/react_logo.png";

class Home extends Component {
  render() {
    return (
      <div id="main_wrapper">
        <h1>Hello Wold</h1>
        <Button />
        <img src={image} />
      </div>
    );
  }
}

export default Home;

// responsible in finding the DOM that we will render to
const wrapper = document.getElementById("react_container");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;
