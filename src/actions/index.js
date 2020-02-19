import axios from "axios";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

export const getAdvice = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get(`https://api.adviceslip.com/advice`)
    .then(res => dispatch({ type: SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ERROR, payload: err }));
};
