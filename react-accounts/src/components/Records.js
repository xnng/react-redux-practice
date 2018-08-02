import React, { Component } from 'react';
import RecordForm from './RecordForm';
import RecordHeader from './RecordHeader'
import RecordTable from './RecordTable'

export default class Records extends Component {
  render() {
    return (
      <div className="container">
        <RecordHeader/>
        <RecordForm />
        <RecordTable />
      </div>
    )
  }
}
