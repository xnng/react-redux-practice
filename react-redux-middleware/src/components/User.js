import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../Action";

class User extends Component {
  render() {
    const { getUser } = this.props;
    const { error, isFetching, user } = this.props.user;

    let data;

    if (error) {
      data = error;
    } else if (isFetching) {
      data = "Loading...";
    } else {
      data = user.email;
    }

    return (
      <div>
        <h1 className="jumbotron-heading text-center">{data}</h1>
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
