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
    case 'FAMILY_RELATION':
      return {
        ...state,
        family_relation: [action.payload],
      }
    case 'PRODUCER_VEHICLE':
      return {
        ...state,
        producer_vehicle: [action.payload],
      }
    case 'PRODUCTION':
      return {
        production: [action.payload],
      };
    case 'PRODUCTION_AGRICULTURAL':
      return {
        production_agricultural: [action.payload],
      }
    case 'PRODUCTION_AGROINDUSTRIAL':
      return {
        production_agroindustrial: [action.payload],
      }

    default:
      return state;
  }
};

export default reducer;
