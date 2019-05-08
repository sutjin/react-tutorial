import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);

    this._increaseCount = this._increaseCount.bind(this);

    this.state = {
      count: 0
    };
  }

  _increaseCount() {
    const increase = this.state.count + 1;
    this.setState({count: increase});
  }

  render() {
    return (
      <div id="main_wrapper">
        <h1>Hello World</h1>
        {this.props.text &&
          <p>{this.props.text}</p>
        }
        {this.props.function &&
          <div className="test_enter" onMouseEnter={this.props.function} />
        }
        <p>Current Count {this.state.count}</p>
        <button type="button" onClick={this._increaseCount}>Click Me!</button>
      </div>
    );
  }
}

export default Home;
