import React from 'react'
import CounterChild from './CounterChild'

export default class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.updateCount = this.updateCount.bind(this);

    this.initValues = [0, 10, 20]

    const initSum = this.initValues.reduce((a, b) => a + b)

    this.state = {
      sum: initSum
    }
  }

  updateCount (previousValue, newValue){
    console.log('d')
    // const changeValue = newValue - previousValue
    // this.setState({
    //   sum: this.state.sum + changeValue
    // })
  }

  render() {
    return (
      <div style={{ margin: 20 }}>
        <CounterChild title="First" initValue={this.initValues[0]} />
        <CounterChild title="Second" initValue={this.initValues[1]} />
        <CounterChild title="Third" initValue={this.initValues[2]} />
        <hr />
        <div>Total Count: {this.state.sum}</div>
      </div>
    )
  }
}