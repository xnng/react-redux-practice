import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class RecordTable extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.date}</td>
                <td>{this.props.title}</td>
                <td>{this.props.amount}</td>
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

RecordTable.propTypes = {
    id: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    amount: PropTypes.number,
}
