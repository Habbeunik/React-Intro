import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rangeInputValue: 100,
      isPlaying: false,
    };
    this.intervalId = null;
    this.handleRangeInputChange = this.handleRangeInputChange.bind(this);
    this.handleRangeIncrease = this.handleRangeIncrease.bind(this);
    this.handleRangeDecrease = this.handleRangeDecrease.bind(this);
    this.handleAudioControl = this.handleAudioControl.bind(this);
  }

  handleRangeInputChange(event) {
    this.setState({ rangeInputValue: event.target.value });
    if (this.state.isPlaying) {
      clearInterval(this.intervalId);
      this.playBeat();
    }
  }

  handleRangeIncrease() {
    function updateState(prevState) {
      if (prevState.rangeInputValue < 100) {
        const newRangeInputValue = prevState.rangeInputValue + 5;
        const newState = { rangeInputValue: newRangeInputValue };
        return newState;
      } else {
        return prevState;
      }
    }
    this.setState(updateState);
    if (this.state.isPlaying) {
      clearInterval(this.intervalId);
      this.playBeat();
    }
  }

  handleRangeDecrease() {
    function decreaseState(prevState) {
      if (prevState.rangeInputValue > 0) {
        const newRangeInputValue = prevState.rangeInputValue - 5;
        const newState = { rangeInputValue: newRangeInputValue };
        return newState;
      } else {
        return prevState;
      }
    }

    this.setState(decreaseState);
    if (this.state.isPlaying) {
      clearInterval(this.intervalId);
      this.playBeat();
    }
  }

  playBeat() {
    const intervalInSecs = 60 / this.state.rangeInputValue;
    const intervalInMilliSecs = intervalInSecs * 1000;

    function sounderPlayer() {
      const beat = new Audio("/clap.mp3");
      beat.play();
    }

    this.intervalId = setInterval(sounderPlayer, intervalInMilliSecs);
  }

  handleAudioControl() {
    if (this.state.isPlaying) {
      clearInterval(this.intervalId);
    } else {
      this.playBeat();
    }

    function updatePlaying(prevState) {
      const newIsPlaying = !prevState.isPlaying;
      const newState = { isPlaying: newIsPlaying };
      return newState;
    }
    this.setState(updatePlaying);
  }

  render() {
    return (
      <div className="App">
        <h1>MENTRONOME</h1>
        <div className="card">
          <h1>{this.state.rangeInputValue}BPM</h1>
          <div className="rangeContainer">
            <button onClick={this.handleRangeDecrease}>-</button>
            <input
              type="range"
              className="range"
              value={this.state.rangeInputValue}
              onChange={this.handleRangeInputChange}
            />
            <button onClick={this.handleRangeIncrease}>+</button>
          </div>
          <button
            className="audioControlButton"
            onClick={this.handleAudioControl}
          >
            {this.state.isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
