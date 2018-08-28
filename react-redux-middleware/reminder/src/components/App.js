import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import PropTypes from "prop-types";
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      time: ""
    };
  }

  changeText = e => {
    this.setState({
      text: e.target.value
    });
  };

  changeTime = e => {
    this.setState({
      time: e.target.value
    });
  };

  addReminder(e) {
    e.preventDefault();
    if (this.state.text && this.state.time) {
      this.props.addReminder(this.state.text, this.state.time);
    } else {
      alert("请填写完整内容");
    }
  }

  deleteReminder(id) {
    this.props.deleteReminder(id);
  }

  clearReminders() {
    this.props.clearReminders();
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group mt-3 col-lg-6">
        {reminders.map(reminder => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div className="d-flex flex-row justify-content-between">
                <h5>{reminder.text}</h5>
                <div onClick={() => this.deleteReminder(reminder.id)}>
                  <span>&#10008;</span>
                </div>
              </div>
              <div>
                <em>{moment(new Date(reminder.date)).fromNow()}</em>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="d-flex flex-column align-items-center mt-5">
        <h1>Reminder</h1>
        <form className="form-inline mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="I have to..."
            onChange={this.changeText}
            required
          />
          <input
            type="datetime-local"
            className="form-control ml-2"
            onChange={this.changeTime}
            required
          />
          <button
            onClick={e => this.addReminder(e)}
            className="btn btn-success ml-4"
          >
            Add Reminder
          </button>
        </form>
        {this.renderReminders()}
        <button
          onClick={() => this.clearReminders()}
          className="btn btn-danger mt-3"
        >
          Clear Reminders
        </button>
      </div>
    );
  }
}

App.propTypes = {
  reminders: PropTypes.array.isRequired,
  addReminder: PropTypes.func.isRequired,
  deleteReminder: PropTypes.func.isRequired,
  clearReminders: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  reminders: state
});

export default connect(
  mapStateToProps,
  actions
)(App);
