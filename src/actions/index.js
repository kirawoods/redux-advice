import axios from "axios";

export const GET_DATA = "GET_DATA";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

export const getData = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get(`https://api.adviceslip.com/advice`)
    .then(res => dispatch({ type: SUCCESS, payload: res.slip.advice }))
    .catch(err => dispatch({ type: ERROR, payload: err.message }));
};
