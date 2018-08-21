import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../Action";

export class User extends Component {
  render() {
    const { getUser, user } = this.props;
    
    return (
      <div>
        <h1 className="text-center mt-5">{user.email}</h1>
        <p className="text-center">
          <button onClick={() => getUser()} className="btn btn-success mr-2">
            get email
          </button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getUser }
)(User);
