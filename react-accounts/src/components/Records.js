import React, { Component } from 'react';
import Record from './Record';
import { getJSON } from 'jquery';

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
    getJSON("https://5b5a93b350bab80014e5f79c.mockapi.io/api/v1/records")
      .then(
        response => this.setState({
          records: response,
          isLoaded: true
        }),
        error => this.setState({
          isLoaded: true,
          error
        })
      )
  }

  render() {
    const { error, isLoaded, records} = this.state;
    if (error) {
      return <div>Error: {error.responseText}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
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
              {records.map((record) => <Record {...record} key={record.id} />)}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Records;
