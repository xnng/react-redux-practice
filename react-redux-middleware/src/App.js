import React, { Component } from "react";
import Counter from "./components/Counter";
import User from "./components/User";

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <User />
      </div>
    );
  }
}

export default App;
