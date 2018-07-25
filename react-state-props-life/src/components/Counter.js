import React from 'react'
import CounterChild from './CounterChild'

export default class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.initValues = [0, 10, 20]

    const initSum = this.initValues.reduce((a, b) => a + b)

    this.state = {
      sum: initSum
    }
  }

  updateCount = (previousValue, newValue) => {
    const changeValue = newValue - previousValue
    this.setState({
      sum: this.state.sum + changeValue
    })
  }

  render() {
    return (
      <div style={{ margin: 20 }}>
        <CounterChild updateCount={this.updateCount} title="First" initValue={this.initValues[0]} />
        <CounterChild updateCount={this.updateCount} title="Second" initValue={this.initValues[1]} />
        <CounterChild updateCount={this.updateCount} title="Third" initValue={this.initValues[2]} />
        <hr />
        <div>Total Count: {this.state.sum}</div>
      </div>
    )
  }
}