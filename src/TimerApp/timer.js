import React from "react";

class TimerClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0, // State to store the number of seconds
      isActive: false, // State to control timer's activity
    };
  }

  componentDidMount() {
    // Setup the interval when the component mounts
    if (this.state.isActive) {
      this.timer = setInterval(this.tick, 1000); // Update every second
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // If the timer is active and the state changes, set up the interval
    if (this.state.isActive && !prevState.isActive) {
      this.timer = setInterval(this.tick, 1000);
    }
    // If the timer becomes inactive, clear the interval
    if (!this.state.isActive && prevState.isActive) {
      clearInterval(this.timer);
    }
  }

  componentWillUnmount() {
    // Cleanup the interval when the component unmounts
    clearInterval(this.timer);
  }

  // Function to increment the seconds
  tick = () => {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  };

  // Function to start the timer
  startTimer = () => {
    this.setState({ isActive: true });
  };

  // Function to stop the timer
  stopTimer = () => {
    this.setState({ isActive: false });
  };

  // Function to reset the timer
  resetTimer = () => {
    this.setState({ isActive: false, seconds: 0 });
  };

  // Convert seconds to minutes and seconds
  formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  render() {
    return (
      <div>
        <h1>Timer</h1>
        <div>
          <span>{this.formatTime(this.state.seconds)}</span>
        </div>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default TimerClass;








