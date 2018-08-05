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

  addRecord = (record) => {
    this.setState({
      records: [...this.state.records, record]
    })
  }

  updateRecord = (preRecord, newRecord) => {
    const recordIndex = this.state.records.indexOf(preRecord);
    const newRecords = this.state.records.map((item, index) => {
      if (index !== recordIndex) {
        // This isn't the item we care about - keep it as-is
        return item;
      }

      // Otherwise, this is the one we want - return an updated value
      return {
        ...item,
        ...newRecord
      }
    });

    this.setState({
      records: newRecords
    });
  }


  render() {
    const { error, isLoad } = this.state;

    if (error) {
      return (
        <div className="mx-auto col-md-3 col-6 mt-5 text-danger">
          <i className="fa fa-warning"></i> Error: {error}
        </div>
      )
    } else if (!isLoad) {
      return (
        <div className="mx-auto col-md-2 col-4 mt-5 text-info">
          <i className="fa fa-spinner fa-spin"></i> Loading...
        </div>
      )
    } else {
      return (
        <div className="container">
          <nav className="navbar navbar-light bg-light mt-3">
            <span className="navbar-brand h1">Records</span>
          </nav>
          <RecordForm handleNewRecord={this.addRecord} />
          <table className="table mt-3">
            <thead>
              <tr>
                <th className="w-25">Date</th>
                <th className="w-25">Title</th>
                <th className="w-25">Amount</th>
                <th className="w-25">Actions</th>
              </tr>
            </thead>
            <tbody className="w-100">
              {this.state.records.map((record) => <RecordTable record={record} key={record.id} handleUpdateRecord={this.updateRecord} />)}
            </tbody>
          </table>
        </div>
      )
    }
  }
}
