import React, { Component } from 'react'

export default class RecordTable extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.record.date}</td>
                <td>{this.props.record.title}</td>
                <td>{this.props.record.amount}</td>
                <td>
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-info"><i className="fa fa-pencil" /></button>
                        <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-trash" /></button>
                    </div>
                </td>
            </tr>
        )
    }
}
