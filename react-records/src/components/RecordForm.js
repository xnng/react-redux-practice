import React, { Component } from 'react';
import * as RecordsAPI from '../utils/RecordsAPI';

export default class RecordForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            date: '',
            title: '',
            amount: ''
        }
    }

    handleChange = (event) => {
        let name, obj;
        name = event.target.name;
        this.setState((
            obj = {},
            obj["" + name] = event.target.value,
            obj
        ))

    }


    handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            date: this.state.date,
            title: this.state.title,
            amount: Number.parseInt(this.state.amount, 0)
        }

        RecordsAPI.create(data).then(
            response => {
                this.props.handleNewRecord(response.data);
                this.setState({
                    date: '',
                    title: '',
                    amount: ''
                })
            }
        ).catch(
            error => console.log(error.message)
        )
    }

    render() {
        return (
            <div className="row">
                <form className="form-inline mt-3" onSubmit={this.handleSubmit}>
                    <div className="form-group ml-3">
                        <input className="form-control " onChange={this.handleChange} type="text" value={this.state.date} placeholder="date" name="date" required />
                    </div>
                    <div className="form-group ml-3">
                        <input className="form-control" onChange={this.handleChange} type="text" value={this.state.title} placeholder="title" name="title" required />
                    </div>
                    <div className="form-group ml-3">
                        <input className="form-control" onChange={this.handleChange} type="number" value={this.state.amount} placeholder="amount" name="amount" required />
                    </div>
                    <div className="form-group ml-3">
                        <button className="btn btn-primary" type="submit">Create Record</button>
                    </div>
                </form>
            </div>
        )
    }
}
