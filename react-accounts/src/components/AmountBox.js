import React, { Component } from 'react'

export default class AmountBox extends Component {
    render() {
        return (
            <div className="col-md-4 col-4">
                <div className="card">
                    <div className={`card-header bg-${this.props.bgColor} text-white`}>
                        {this.props.title}
                    </div>
                    <div className="card-body">
                        {this.props.amount}
                    </div>
                </div>
            </div>
        )
    }
}