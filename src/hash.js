const hashReducer = (state = "", action) => {
  if (action.type === "newHash") {
    state = action.hash;
    return state;
  }
  return state;
};
export default hashReducer;
