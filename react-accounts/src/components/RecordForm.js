import React, { Component } from 'react'

export default class RecordForm extends Component {
    render() {
        return (
            <div className="row">
                <form className="form-inline mt-3">
                    <div className="form-group ml-3">
                        <input className="form-control" type="date" placeholder="data" name="data" />
                    </div>
                    <div className="form-group ml-3">
                        <input className="form-control" type="text" placeholder="title" name="title" />
                    </div>
                    <div className="form-group ml-3">
                        <input className="form-control" type="number" placeholder="amount" name="amount" />
                    </div>
                    <div className="form-group ml-3">
                        <button className="btn btn-primary" type="submit">Create Record</button>
                    </div>
                </form>
            </div>
        )
    }
}
