import React from "react";
import { connect } from "react-redux";
import { getAdvice } from "../actions";

const AdviceButton = props => {
  function handleClick(e) {
    e.preventDefault();
    props.getAdvice();
    console.log(props);
  }
  return (
    <div>
      <button onClick={handleClick}>Consult the Oracle</button>
      <p>{props.adviceSlip.slip.advice}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    adviceSlip: state.adviceSlip,
    isLoading: false,
    failed: false
  };
};

export default connect(mapStateToProps, { getAdvice })(AdviceButton);
