import React, { Component } from "react";
import store from "./Store";
import * as Action from "./Action";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: store.getState().count
    };

    console.log(store.getState().count)
  }

  onIncrement = () => {
    store.dispatch(Action.increment());
    console.log(store.getState())
  };

  onDecrement = () => {
    store.dispatch(Action.decrement());
  };

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        count: store.getState().count
      });
    });
    console.log(store.getState().count)
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5">{store.getState().count}</h1>
        <p className="text-center">
          <button className="btn btn-primary mr-2" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="btn btn-danger my-2" onClick={this.onDecrement}>
            Decrease
          </button>
        </p>
      </div>
    );
  }
}
