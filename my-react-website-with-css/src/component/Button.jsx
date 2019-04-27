import React, { Component } from "react";

// Creating a React Component class
class Button extends Component {
  // unique behavour for the button contained in the class
  onClick() {
    alert('I am an alert box!')
  }
  // What will be rendered by this component
  render() {
    return (
      <button type="button" className="btn-custom" onClick={this.onClick}>Click Me!</button>
    );
  }
}
// exporting our class so we can use it elsewhere
export default Button;
