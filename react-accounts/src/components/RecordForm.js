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

    handleChange = (e) => {
        this.setState({date: e.target.value});
    }


    handleSubmit = (e) => {
        e.preventDefault();

        const data = this.state;

        RecordsAPI.create(data).then(
            response => console.log(response.data)
        ).catch(
            error => console.log(error.message)
        )

    }

    render() {
        return (
            <div className="row">
                <form className="form-inline mt-3" onSubmit={this.handleSubmit}>
                    <div className="form-group ml-3">
                        <input className="form-control" onChange={this.handleChange} type="text" placeholder="date" name="date" required />
                    </div>
                    <div className="form-group ml-3">
                        <input className="form-control" onChange={this.handleChange} type="text" placeholder="title" name="title" required />
                    </div>
                    <div className="form-group ml-3">
                        <input className="form-control" onChange={this.handleChange} type="number" placeholder="amount" name="amount" required />
                    </div>
                    <div className="form-group ml-3">
                        <button className="btn btn-primary" type="submit">Create Record</button>
                    </div>
                </form>
            </div>
        )
    }
}
