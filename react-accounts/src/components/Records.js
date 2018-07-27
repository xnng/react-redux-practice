import React, { Component } from 'react';
import Record from './Record';

class Records extends Component {
  constructor() {
    super()
    this.state = {
      records: [
        { "id": 2, "date": "2018-08-01", "title": "test1", "amount": 10 },
        { "id": 3, "date": "2018-08-02", "title": "test2", "amount": 20 },
        { "id": 4, "date": "2018-08-03", "title": "test3", "amount": 30 }
      ]
    }
  }

  render() {
    return (
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.state.records.map((record,i) => <Record record={record} key={i}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Records;
