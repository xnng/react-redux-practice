import React, { Component } from 'react'

export default class RecordTable extends Component {
    render() {
        return (
            <table className="table mt-3">
                <thead>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Actions</th>
                </thead>
            </table>
        )
    }
}
