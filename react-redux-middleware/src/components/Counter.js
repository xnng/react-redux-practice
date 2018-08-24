import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Counter extends Component {
  render() {
    const { increment, decrement, count } = this.props;

    return (
      <div className="text-center">
        <h1 className="mt-5">{count}</h1>
        <button onClick={() => increment()} className="btn btn-success mr-3">
          Increment
        </button>
        <button onClick={() => decrement()} className="btn btn-danger">
          Decrement
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state
});

export default connect(
  mapStateToProps,
  actions
)(Counter);
