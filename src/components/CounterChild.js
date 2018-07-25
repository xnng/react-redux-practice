import React from 'react'

export default class CounterChild extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            count: props.initValue
        }
    }

    incrementCount (){
        const previousValue = this.state.count
        const newValue = previousValue + 1
        this.setState({
            count: newValue
        })
        this.props.updateCount(previousValue, newValue)
    }

    decrementCount() {
        const previousValue = this.state.count
        const newValue = previousValue - 1
        this.setState({
            count: newValue
        })
        this.props.updateCount(previousValue, newValue)
    }

    render() {
        return (
            <div>
                <button style={{ margin: 10 }} onClick={this.incrementCount.bind(this)}>+</button>
                <button style={{ margin: 10 }} onClick={this.decrementCount.bind(this)}>-</button>
                <span>{this.state.title} count: {this.state.count}</span>
            </div>
        )
    }
}