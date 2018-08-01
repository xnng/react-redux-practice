import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as ReacordAPI from '../utils/RecordsAPI'

export default class Record extends Component {
    constructor() {
        super();
        this.state = {
            edit: false
        };
    }

    handleToggle = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    handleEdit = (event) => {
        event.preventDefault();
        const record = {
            date: this.refs.date.value,
            title: this.refs.title.value,
            amount: parseInt(this.refs.amount.value, 0)
        }
        ReacordAPI.update(this.props.id, record)
            .then(
                response => console.log(response.data)
            ).catch(
                error => console.log(error.message)
            )
    }

    recordRow() {
        return (
            <tr>
                <td>{this.props.date}</td>
                <td>{this.props.title}</td>
                <td>{this.props.amount}</td>
                <td>
                    <button className="btn btn-info mr-2" onClick={this.handleToggle}>Eidt </button>
                    <button className="btn btn-danger">Delete </button>
                </td>
            </tr>
        );
    }

    recordForm() {
        return (
            <tr>
                <td><input type="text" className="form-control" defaultValue={this.props.date} ref="date" /></td>
                <td><input type="text" className="form-control" defaultValue={this.props.title} ref="title" /></td>
                <td><input type="number" className="form-control" defaultValue={this.props.amount} ref="amount" /></td>
                <td>
                    <button className="btn btn-info mr-2" onClick={this.handleEdit}>Update </button>
                    <button className="btn btn-danger" onClick={this.handleToggle}>Cancel </button>
                </td>
            </tr>
        ); 
    }

    render() {
        if (this.state.edit) {
            return this.recordForm();
        } else {
            return this.recordRow();
        }
    }
}

Record.propTypes = {
    id: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    amount: PropTypes.number
}