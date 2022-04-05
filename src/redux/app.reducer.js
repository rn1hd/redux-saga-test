const INITIAL_VALUE = {
  value: 0,
};

const appReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case "INCREMENT_FROM_SAGA":
      return {
        ...state,
        value: state.value + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export default appReducer;
