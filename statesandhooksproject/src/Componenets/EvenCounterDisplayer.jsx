import React, { Component } from "react";

export default class EvenCounterDisplayer extends Component {
  render() {
    return <div> Even Clicks Count : {this.props.count}</div>;
  }
}
