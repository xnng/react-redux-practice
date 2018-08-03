import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class RecordTable extends Component {

    constructor(props) {
        super(props)

        this.state = {
            edit: true
        }
    }

    handleToggle = () => {
        this.setState({
            edit: !this.state.edit
        })
    }


    recordRow() {
        return (
            <tr>
                <td>{this.props.date}</td>
                <td>{this.props.title}</td>
                <td>{this.props.amount}</td>
                <td>
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-info" onClick={this.handleToggle}><i className="fa fa-pencil" /></button>
                        <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-trash" /></button>
                    </div>
                </td>
            </tr>
        )
    }

    recordNewRow() {
        return (
            <tr>
                <td>
                    <div className="input-group input-group-sm">
                        <input type="text" className="form-control input-group-prepend" defaultValue={this.props.date} />
                    </div>
                </td>
                <td>
                    <div className="input-group input-group-sm">
                        <input type="text" className="form-control input-group-prepend" defaultValue={this.props.title} />
                    </div>
                </td>
                <td>
                    <div className="input-group input-group-sm">
                        <input type="text" className="form-control input-group-prepend" defaultValue={this.props.amount} />
                    </div>
                </td>
                <td>
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-success"><i className="fa fa-check" /></button>
                        <button type="button" className="btn btn-sm btn-secondary" onClick={this.handleToggle}><i className="fa fa-close" /></button>
                    </div>
                </td>
            </tr>
        )
    }

    render() {
        if (this.state.edit) {
            return this.recordRow();
        } else {
            return this.recordNewRow();
        }
    }
}

RecordTable.propTypes = {
    id: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    amount: PropTypes.number,
}
