export const doIncrement = (value) => {
  return (dispatch, getState) => {
    dispatch({ type: "INCREMENT", payload: { value: value } });
  };
};

export const doDecrement = (value) => {
  return (dispatch, getState) => {
    dispatch({ type: "DECREMENT", payload: { value: value } });
  };
};
