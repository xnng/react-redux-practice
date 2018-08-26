import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

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

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group mt-3 col-lg-6">
        {reminders.map(reminder => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div>{reminder.text}</div>
              <div>
                <em>{reminder.date}</em>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  addReminder(e) {
    e.preventDefault();
    if (this.state.text && this.state.time) {
      this.props.addReminder(this.state.text, this.state.time);
    } else {
      alert("请填写完整内容");
    }
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
            // type="submit"
          >
            Add Reminder
          </button>
        </form>
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
