const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_USER':
      return {
        ...state,
      };
    case 'PRODUCER_POST_LOCAL':
      return {
        ...state,
        MyListProducer: [action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
