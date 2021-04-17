const reducer = (
  state = {
    data_producer: {},
    producer: {
      producer_home: {},
      producer_activity: {},
      producer_person: [],
      producer_vehicle: [],
      production: [],
    },
    body: {},
    result: [],
    token: [],
    user_login: [],
  },
  action,
) => {
  switch (action.type) {
    case 'SHOW_USER':
      return {
        ...state,
      };
    case 'PRODUCER_POST_LOCAL':
      return {
        ...state, //copia la estructura del state inicial
        data_producer: action.payload,
      };
    case 'PRODUCER_HOME':
      return {
        ...state,
        producer: {
          ...state.producer,
          producer_home: action.payload,
        },
      };
    case 'PRODUCER_ACTIVITY':
      return {
        ...state,
        producer: {
          ...state.producer,
          producer_activity: action.payload,
        },
      };
    case 'PRODUCER_PERSON':
      return {
        ...state,
        producer: {
          ...state.producer,
          producer_person: action.payload,
        },
      };
    case 'PRODUCER_VEHICLE':
      return {
        ...state,
        producer: {
          ...state.producer,
          producer_vehicle: action.payload,
        },
      };
    case 'PRODUCTION':
      return {
        ...state,
        producer: {
          ...state.producer,
          production: action.payload,
        },
      };
    case 'PRODUCER':
      return {
        ...state,
        body: {
          producer: action.payload,
        },
      };
    case 'RESULT':
      return {
        ...state,
        result: [...state.result, action.payload],
      };
    case 'REMOVE_PRODUCER':
      return {
        ...state,
        result: state.result.filter((item) => item !== action.payload),
      };
    case 'CLEAR_PRODUCER_FORMS':
      return {
        ...state, //copio todo lo que tenga a lado del obj producer
        data_producer: [],
        producer: {
          ...state.producer, //tragio todo lo que tenga dentro del obj producer (arrays)
          producer_home: {},
          producer_activity: {},
          producer_person: [],
          producer_vehicle: [],
          production: [],
        },
        body: [],
      };
    case 'TOKEN_UPDATE':
      return {
        ...state,
        token: action.payload,
      };
    case 'USER_LOGIN_UPDATE':
      return {
        ...state,
        user_login: action.payload,
      };
      default:
      return state;
  }
};

export default reducer;
