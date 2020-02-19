import { createStore, applyMiddleware } from "redux";
import { FETCHING, SUCCESS, ERROR } from "../actions";
import thunk from "redux-thunk";

const initialState = {
  adviceSlip: { slip: { advice: "Never run with scissors.", slip_id: 40 } },
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case SUCCESS:
      console.log(action);
      return {
        ...state,
        adviceSlip: action.payload,
        isLoading: false,
        error: ""
      };
    case ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export const store = createStore(reducer, applyMiddleware(thunk));
