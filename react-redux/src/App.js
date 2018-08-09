import React, { Component } from 'react';
import reducer from './reducer/Counter'
import { createStore } from 'redux'
import { increment, decrement } from './actions';

const store = createStore(reducer)
const initCount = store.getState()

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: initCount
    }
  }

  onIncrement = () => {
    store.dispatch(increment())
    this.setState({
      count: store.getState()
    })
  }

  onDecrement = () => {
    store.dispatch(decrement())
    this.setState({
      count: store.getState()
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5">{this.state.count}</h1>
        <p className="text-center">
          <button onClick={this.onIncrement} className="btn btn-primary mr-2">Increase</button>
          <button onClick={this.onDecrement} className="btn btn-danger my-2">Decrease</button>
        </p>
      </div>
    );
  }
}

export default App;
