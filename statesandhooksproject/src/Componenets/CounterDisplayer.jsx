import React, { Component } from "react";

export default class CounterDisplayer extends Component {
  render() {
    return <div> All Clicks Count : {this.props.count}</div>;
  }
}
