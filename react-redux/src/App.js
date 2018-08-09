import React, { Component } from 'react';
import { createStore } from 'redux';
import { decrement, increment } from './actions';
import reducer from './reducer/Counter';
import { connect } from 'react-redux'

export const store = createStore(reducer)

class App extends Component {

  onIncrement = () => {
    store.dispatch(increment())
  }

  onDecrement = () => {
    store.dispatch(decrement())
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5">{this.props.counter}</h1>
        <p className="text-center">
          <button onClick={this.onIncrement} className="btn btn-primary mr-2">Increase</button>
          <button onClick={this.onDecrement} className="btn btn-danger my-2">Decrease</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state
})


export default connect(mapStateToProps)(App);
