import "./App.css";
import React from "react";

import Clock from "./Clock";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showClock: true,
    };
    this.toggleShowClock = this.toggleShowClock.bind(this);
  }

  toggleShowClock() {
    this.setState(function (prevState) {
      return {
        showClock: !prevState.showClock,
      };
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.showClock ? <Clock /> : null}
        <button onClick={this.toggleShowClock}>Toggle Clock</button>
      </div>
    );
  }
}

export default App;
