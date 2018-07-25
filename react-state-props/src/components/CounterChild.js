import React from 'react'

export default class CounterChild extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: props.initValue
        }
    }

    incrementCount = () => {
        this.creamentCount(true)
    }

    decrementCount = () => {
        this.creamentCount(false)
    }

    creamentCount(flag) {
        const previousValue = this.state.count
        const newValue = flag ? previousValue + 1 : previousValue - 1
        this.setState({
            count: newValue
        })
        this.props.updateCount(previousValue, newValue)
    }

    render() {
        return (
            <div>
                <button style={{ margin: 10 }} onClick={this.incrementCount}>+</button>
                <button style={{ margin: 10 }} onClick={this.decrementCount}>-</button>
                <span>{this.props.title} count: {this.state.count}</span>
            </div>
        )
    }
}