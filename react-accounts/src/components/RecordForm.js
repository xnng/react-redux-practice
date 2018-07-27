import React, { Component } from 'react';
import * as RecordsAPI from '../utils/RecordsAPI'


export default class RecordForm extends Component {

    constructor() {
        super()
        this.state = {
            date: '',
            title: '',
            amount: ''
        }
    }

    valid() {
        return this.state.date && this.state.title && this.state.amount
    }

    handleChange = (e) => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()

        const date = {
            date: this.state.date,
            title: this.state.title,
            amount: parseInt(this.state.amount,0)
        }

        RecordsAPI.create(date).then(
            response => {
                this.props.handleNewRecord(response.data)
            },
            this.setState({
                date: '',
                title: '',
                amount: ''
            })
        ).catch(
            error => console.log(error.message)
        )
    }

    render() {
        return (
            <form className="form-inline mb-3 mt-3" onSubmit={this.handleSubmit}>
                <div className="form-group mr-2">
                    <input type="date" className="form-control" onChange={this.handleChange} placeholder="Date" value={this.state.date} name="date" />
                </div>
                <div className="form-group mr-2">
                    <input type="text" className="form-control" onChange={this.handleChange} placeholder="Title" value={this.state.title} name="title" />
                </div>
                <div className="form-group mr-2">
                    <input type="text" className="form-control" onChange={this.handleChange} placeholder="Amount" value={this.state.amount} name="amount" />
                </div>
                <button type="submit" className="btn btn-primary" disabled={!this.valid()}>Create Record</button>
            </form>
        );
    }
}