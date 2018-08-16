import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5">{this.state.count}</h1>
        <p className="text-center">
          <button
            onClick={this.handleIncrement}
            className="btn btn-primary mr-2"
          >
            Increase
          </button>
          <button
            onClick={this.handleDecrement}
            className="btn btn-danger my-2"
          >
            Decrease
          </button>
        </p>
      </div>
    );
  }
}
