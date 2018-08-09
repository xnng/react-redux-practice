import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from './actions';

class App extends Component {

  render() {
    const { dispatch } = this.props;
    return (
      <div className="container">
        <h1 className="text-center mt-5">{this.props.counter}</h1>
        <p className="text-center">
          <button onClick={() => dispatch(increment('bgrc'))} className="btn btn-primary mr-2">Increase</button>
          <button onClick={() => dispatch(decrement())} className="btn btn-danger my-2">Decrease</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

export default connect(mapStateToProps)(App);
