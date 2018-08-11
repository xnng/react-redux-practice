import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import * as types from './actions';

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

const mapStateToProps = (state) => ({
  counter: state.counter
})

App.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, types)(App);
