const initState = {
  counterValue: 0,
};

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counterValue: state.counterValue + action.payload.value,
      };
    case "DECREMENT":
      return {
        ...state,
        counterValue: state.counterValue - action.payload.value,
      };
    default:
      break;
  }
  return state;
};

export default counterReducer;
