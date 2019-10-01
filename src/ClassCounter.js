import React, { Component } from "react";

export default class ClassCounter extends Component {
  state = {
    counter: 0
  };

  componentDidMount = () => {
    document.title = this.state.counter;
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.counter !== this.state.counter)
      document.title = this.state.counter;
  };

  render() {
    return (
      <div>
        {this.state.counter}
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          add
        </button>
      </div>
    );
  }
}
