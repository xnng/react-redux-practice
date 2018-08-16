import React, { Component } from 'react';

class App extends Component {

  render() {
    const { increment, decrement } = this.props;
    console.log(this.props)
    return (
      <div className="container">
        <h1 className="text-center mt-5">{this.props.counter}</h1>
        <p className="text-center">
          <button onClick={() => increment()} className="btn btn-primary mr-2">Increase</button>
          <button onClick={() => decrement()} className="btn btn-danger my-2">Decrease</button>
        </p>
      </div>
    );
  }
}