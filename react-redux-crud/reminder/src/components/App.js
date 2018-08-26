import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  changeValue = e => {
    this.setState({
      text: e.target.value
    });
  };

  renderReminders() {
    const { reminders } = this.props
    return (
      <ul className="list-group mt-3 col-lg-6">
        {reminders.map(reminder => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div>{reminder.text}</div>
              <div><em>time</em></div>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    const { addReminder } = this.props;

    return (
      <div className="d-flex flex-column align-items-center mt-5">
        <h1>Reminder</h1>
        <div className="form-inline mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="I have to..."
            onChange={this.changeValue}
          />
          <button
            onClick={() => addReminder(this.state.text)}
            className="btn btn-success ml-4"
          >
            Add Reminder
          </button>
        </div>
        {this.renderReminders()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reminders: state
});

export default connect(
  mapStateToProps,
  actions
)(App);
