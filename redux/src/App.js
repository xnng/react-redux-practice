import React, { Component } from 'react';
import './App.css';
import ControlPanel from './redux/views/ControlPanel'
// import ControlPanel from './flux/views/ControlPanel'

class App extends Component {
  render() {
    return (
      <div>
        <ControlPanel/>
      </div>
    );
  }
}

export default App;
