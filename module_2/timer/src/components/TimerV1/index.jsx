import React, { Component } from "react";

class TimerV2 extends Component {
  constructor() {
    super();
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ seconds: this.state.seconds+1 }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Result: {this.state.seconds} <span style={{ fontSize: "15px" }}>(Class Component)</span>
      </div>
    )
  }
};

export default TimerV2;
