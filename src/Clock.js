import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.tick = this.tick.bind(this);
    this.timerId = null;
  }

  tick() {
    this.setState(function (prevState) {
      const newCounter = prevState.counter + 1;
      const newState = {
        counter: newCounter,
      };

      return newState;
    });
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.tick}>Tick</button>
      </>
    );
  }
}

export default Clock;
