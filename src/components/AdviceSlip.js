import React from "react";
import { connect } from "react-redux";

const badAdvice =
  "Having a bad day? No worries! Wear sunglasses. Now you’re having a bad evening.";

const AdviceSlip = props => {
  console.log(props);
  return <p>{props.advice}</p>;
};
const mapStateToProps = state => {
  return {
    advice: state.advice
  };
};

export default connect(mapStateToProps, {})(AdviceSlip);
