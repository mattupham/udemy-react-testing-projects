import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      showError: false
    };
  }
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        <button
          data-test="increment-button"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increment Button
        </button>
        <button
          data-test="decrement-button"
          onClick={() => {
            if (this.state.counter <= 0) {
              this.setState({ showError: true });
            } else {
              this.setState({ counter: this.state.counter - 1 });
            }
          }}
        >
          Decrement Button
        </button>
        {this.state.showError && (
          <p data-test="decrement-error">Counter cannot go below 0</p>
        )}
      </div>
    );
  }
}

export default App;
