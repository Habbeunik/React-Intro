import React from "react";

class Condition extends React.Component {
  // state = {
  //   range: 0,
  // };

  // handleRangeChange = (event) => {
  //   this.setState({ range: event.target.value });
  // };
  // compact = async () => {
  //   const audio = new Audio("/clap.mp3");
  //   console.log("audio", audio);
  //   console.log(audio.currentTime);
  //   await audio.play();
  //   console.log(audio.ended);
  // };

  // playCompact = () => {
  //   this.compact();
  // };

  // componentDidMount() {
  //   setInterval(() => {
  //     this.compact();
  //   }, 1600);
  // }

  render() {
    return (
      <div>
        <input type="range" />
      </div>
    );
  }
}

export default Condition;
