import React, { Component } from 'react';
import Record from './Record';
import * as RecordsAPI from '../utils/RecordsAPI'
import RecordForm from './RecordForm'

class Records extends Component {
  constructor() {
    super()
    this.state = {
      error: null,
      isLoaded: false,
      records: []
    }
  }

  componentDidMount() {
    RecordsAPI.getAll().then(
      response => this.setState({
        records: response.data,
        isLoaded: true
      })
    ).catch(
      error => this.setState({
        isLoaded: true,
        error
      })
    )
  }

  addRecord(record) {
    // this.setState({records: this.state.records.concat(record)})
    this.setState({ records: [...this.state.records, record] })
  }

  render() {
    const { error, isLoaded, records } = this.state;
    let recordsComponents;

    if (error) {
      recordsComponents = <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      recordsComponents = <div>Loading...</div>
    } else {
      recordsComponents = (
        <div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => <Record {...record} key={record.id} />)}
            </tbody>
          </table>
        </div>
      )
    }
    return (
      <div className="container">
        <h2 className="mt-5">Records</h2>
        <RecordForm handleNewRecord={this.addRecord.bind(this)} />
        {recordsComponents}
      </div>
    )
  }
}

export default Records;
