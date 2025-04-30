import React, { Component } from "react";
import CounterDisplayer from "./CounterDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer";
export default class MyCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      EvenCount: 0,
    };
  }
  allClicksCounter = () => {
    //incrementing count
    this.setState((previousState) => {
      const newCount = previousState.count + 1;
      return {
        count: newCount,
      };
    });
  };

  evenClicksCounter = () => {
    //incrementing counteven
    this.setState((previousState) => {
      const newCount = previousState.count;
      return {
        EvenCount: newCount % 2 === 0 ? newCount : previousState.EvenCount,
      };
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            padding: "5px",
            borderRadius: "5px",
            color: "white",
            backgroundColor: "green",
            cursor: "pointer",
            marginBottom: "10px",
          }}
          onClick={() => {
            this.allClicksCounter();
            this.evenClicksCounter();
          }}
        >
          Click here
        </button>
        <CounterDisplayer count={this.state.count} />
        <EvenCounterDisplayer count={this.state.EvenCount} />
      </div>
    );
  }
}
