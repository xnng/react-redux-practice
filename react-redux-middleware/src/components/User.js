import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

export class User extends Component {
  render() {
    const { get_user } = this.props;
    const { initName, error, isFetching } = this.props.user;

    let data;
    if (error) {
      data = error;
    } else if (isFetching) {
      data = "Loading...";
    } else if (initName) {
      data = initName;
    } else {
      data = "waiting for click";
    }

    return (
      <div className="text-center">
        <h3 className="mt-5">{data}</h3>
        <button onClick={() => get_user()} className="btn btn-primary">
          Get Full Name
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  actions
)(User);
