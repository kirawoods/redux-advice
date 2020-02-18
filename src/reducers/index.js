const initialState = {
  advice: "",
  isLoading: false,
  failed: false
};

export const adviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isLoading: true,
        failed: false
      };
    case SUCCESS:
      console.log("action.payload in GET_DATA reducer: ", action.payload);
      return {
        ...state,
        advice: action.payload,
        isLoading: false,
        failed: false
      };
    case ERROR:
      return {
        ...state,
        advice: action.payload,
        isLoading: false,
        failed: true
      };
    default:
      return state;
  }
};
