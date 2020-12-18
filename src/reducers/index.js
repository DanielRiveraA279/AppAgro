const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_USER':
      return {
        ...state,
      };

    case 'PRODUCER_POST_LOCAL':
      return {
        ...state,
        data_producer: [action.payload],
      };

    case 'PRODUCER_ACTIVITY':
      return {
        ...state,
        producer_activity: [action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
