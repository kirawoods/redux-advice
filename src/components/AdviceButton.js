import React from "react";
import { connect } from "react-redux";
import { getAdvice } from "../actions";

const AdviceButton = props => {
  function handleClick(e) {
    e.preventDefault();
    props.getAdvice(e);
    console.log(props);
  }
  return <button onClick={handleClick}>Consult the Oracle</button>;
};

const mapStateToProps = state => {
  return {
    advice: state.advice,
    isLoading: false,
    failed: false
  };
};

export default connect(mapStateToProps, { getAdvice })(AdviceButton);
