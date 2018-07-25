import React from 'react'

export default class CounterChild extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: props.initValue
        }
    }

    incrementCount =()=>{
        const previousValue = this.state.count
        const newValue = previousValue + 1
        this.setState({
            count: newValue
        })
        this.props.updateCount(previousValue, newValue)
    }

    decrementCount=() =>{
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
                <button style={{ margin: 10 }} onClick={this.incrementCount}>+</button>
                <button style={{ margin: 10 }} onClick={this.decrementCount}>-</button>
                <span>{this.props.title} count: {this.state.count}</span>
            </div>
        )
    }
}