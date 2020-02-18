import React, { Component } from "react";

const advice =
  "Having a bad day? No worries! Wear sunglasses. Now you’re having a bad evening.";

export class AdviceSlip extends Component {
  render() {
    return <p>{advice}</p>;
  }
}
