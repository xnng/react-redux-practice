import React from 'react'

export default class CounterChild extends React.Component {

    constructor(props) {
        console.log('constructor()')
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

    componentWillMount() {
        console.log('componentWillMount()')
    }

    componentDidMount() {
        console.log('componentDidMount()')
    }

    componentWillReceiveProps(props) {
        console.log('componentWillReceiveProps(): ' + props.title)
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate()')
        return true
    }

    componentWillUpdate() {
        console.log('componentWillUpdate()')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate()')
    }

    render() {
        console.log('render()')
        return (
            <div>
                <button style={{ margin: 10 }} onClick={this.incrementCount}>+</button>
                <button style={{ margin: 10 }} onClick={this.decrementCount}>-</button>
                <span>{this.props.title} count: {this.state.count}</span>
            </div>
        )
    }
}