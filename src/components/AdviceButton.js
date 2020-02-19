import React from "react";
import { connect } from "react-redux";
import { getAdvice } from "../actions";
import "./AdviceButton.css";

const AdviceButton = props => {
  function handleClick(e) {
    e.preventDefault();
    props.getAdvice();
    console.log(props);
  }
  return (
    <div>
      <button className="advice-button" onClick={handleClick}>
        Consult
        <br />
        the
        <br />
        Oracle
      </button>
      <p className="advice-slip">{props.adviceSlip.slip.advice}</p>
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
