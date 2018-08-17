import React, { Component } from "react";
import * as Action from "./Action";
import { connect } from "react-redux";

class App extends Component {

  render() {
    const { increment, decrement } = this.props;

    return (
      <div className="container">
        <h1 className="text-center mt-5">{this.props.text}{this.props.count}</h1>
        <p className="text-center">
          <button className="btn btn-primary mr-2" onClick={() => increment()}>
            Increase
          </button>
          <button className="btn btn-danger my-2" onClick={() => decrement()}>
            Decrease
          </button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count,
  text: state.hello
});

export default connect(mapStateToProps,Action)(App);
