import React, { Component } from 'react';
import RecordForm from './RecordForm';
import RecordTable from './RecordTable';
import * as RecordsAPI from '../utils/RecordsAPI'

export default class Records extends Component {
  constructor(props) {
    super(props)

    this.state = {
      records: [
        { "id": 1, "date": "2018 - 01 - 01", "title": "text1", "amount": 20 },
        { "id": 2, "date": "2018 - 01 - 02", "title": "text2", "amount": 21 },
        { "id": 3, "date": "2018 - 01 - 03", "title": "text3", "amount": 22 },
        { "id": 4, "date": "2018 - 01 - 04", "title": "text4", "amount": 23 },
      ]
    }
  }

  componentDidMount() {
    RecordsAPI.getAll().then(
      response => this.setState({
        records: response.data
      })
    ).catch(
      error => console.log(error.message)
    )
  }

  render() {
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
              {this.state.records.map((record) => <RecordTable record={record} key={record.id} />)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
