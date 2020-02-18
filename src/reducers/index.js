import { createStore, applyMiddleware } from "redux";

const initialState = {
  advice: "Don't run with scissors",
  isLoading: false,
  failed: false
};

export const reducer = (state = initialState, action) => {
  console.log("Reducer", state, action);
  return state;
};

export const store = createStore(reducer);

// export const adviceReducer = () => {
//   return initialState;
// };

// export const adviceReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCHING:
//       return {
//         ...state,
//         isLoading: true,
//         failed: false
//       };
//     case SUCCESS:
//       console.log("action.payload in GET_DATA reducer: ", action.payload);
//       return {
//         ...state,
//         advice: action.payload,
//         isLoading: false,
//         failed: false
//       };
//     case ERROR:
//       return {
//         ...state,
//         advice: action.payload,
//         isLoading: false,
//         failed: true
//       };
//     default:
//       return state;
//   }
// };
