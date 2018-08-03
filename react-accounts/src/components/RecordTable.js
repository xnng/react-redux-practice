import React, { Component } from 'react'

export default class RecordTable extends Component {
    render() {
        return (
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
                        <tr>
                            <td>2018-01-02</td>
                            <td>支出</td>
                            <td>32</td>
                            <td>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-info"><i className="fa fa-pencil"/></button>
                                    <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-trash"/></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
