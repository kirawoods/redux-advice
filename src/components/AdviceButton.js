import React from "react";
import { connect } from "react-redux";

const AdviceButton = () => {
  return <button>Consult the Oracle</button>;
};

const mapStateToProps = state => {
  return {
    advice: state.advice,
    isLoading: false,
    failed: false
  };
};

export default connect(mapStateToProps, {})(AdviceButton);
