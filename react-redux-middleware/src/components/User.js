import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

export class User extends Component {
  render() {
    console.log(this.props);
    const { get_user } = this.props;
    const { initName } = this.props.userName;
    return (
      <div className="text-center">
        <h3 className="mt-5">{initName}</h3>
        <button onClick={() => get_user()} className="btn btn-primary">
          Get Full Name
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userName: state.user
});

export default connect(
  mapStateToProps,
  actions
)(User);
