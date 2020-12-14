const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_USER':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
