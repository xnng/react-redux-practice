import React, { Component } from 'react';
import RecordForm from './RecordForm';
import RecordTable from './RecordTable';
import * as RecordsAPI from '../utils/RecordsAPI'

export default class Records extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoad: false,
      records: []
    }
  }

  componentDidMount() {
    RecordsAPI.getAll().then(
      response => this.setState({
        isLoad: true,
        records: response.data
      })
    ).catch(
      error => this.setState({
        isLoad: true,
        error: error.message
      })
    )
  }

  render() {
    const { error, isLoad } = this.state;

    if (error) {
      return (
        <div class="alert alert-danger container mt-3">
          Error: {error}
        </div>
      )
    } else if (!isLoad) {
      return (
        <div class="alert alert-info container mt-3">
          Loading ...
        </div>
      )
    } else {
      return (
        <div className="container">
          <nav className="navbar navbar-light bg-light mt-3">
            <span className="navbar-brand h1">Records</span>
          </nav>
          <RecordForm />
          <div className="table-responsive">
            <table className="table table-striped mt-3">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.records.map((record) => <RecordTable {...record} key={record.id} />)}
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  }
}
