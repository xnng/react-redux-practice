import React, { Component } from 'react';
import RecordForm from './RecordForm';
import RecordTable from './RecordTable';
import AmountBox from './AmountBox'
import * as RecordsAPI from '../utils/RecordsAPI'

export default class Records extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoad: false,
      records: [],
      amount: ''
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

  deleteRecord = (deleteRecord) => {
    const recordIndex = this.state.records.indexOf(deleteRecord);
    const newRecords = this.state.records.filter((item, index) => index !== recordIndex);

    this.setState({
      records: newRecords
    });
  }

  income = () => {
    let income = this.state.records.filter((item) => {
      return item.amount >= 0
    })

    return income.reduce((prev, curr) => {
      return prev + curr.amount
    }, 0)
  }

  debit() {
    let income = this.state.records.filter((item) => {
      return item.amount < 0
    })

    return income.reduce((prev, curr) => {
       return prev + curr.amount
    }, 0)
  }

  total() {
    return this.income() + this.debit()
  }

  render() {
    const { error, isLoad, records } = this.state;

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
          <div className="row mt-3">
            <AmountBox title="Income" bgColor="success" amount={this.income()} />
            <AmountBox title="Debit" bgColor="danger" amount={this.debit()} />
            <AmountBox title="Total" bgColor="info" amount={this.total()} />
          </div>
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
              {records.map((record) => {
                return <RecordTable
                  record={record}
                  key={record.id}
                  handleUpdateRecord={this.updateRecord}
                  handleDeleteRecord={this.deleteRecord}
                />
              })}
            </tbody>
          </table>
        </div>
      )
    }
  }
}
