export const loginRequest = (payload) => ({
  type: 'SHOW_USER',
  payload,
});

export const producerPostLocal = (payload) => ({
  type: 'PRODUCER_POST_LOCAL',
  payload,
});

export const producerHomePost = (payload) => ({
  type: 'PRODUCER_HOME',
  payload,
});

export const producerPostActivity = (payload) => ({
  type: 'PRODUCER_ACTIVITY',
  payload,
});

export const familyRelationPost = (payload) => ({
  type: 'PRODUCER_PERSON',
  payload,
});

export const producerVehiclePost = (payload) => ({
  type: 'PRODUCER_VEHICLE',
  payload,
});

//---------------------------------PROPIEDADES DE PRODUCCION-------------------------------------
export const productionPost = (payload) => ({
  type: 'PRODUCTION',
  payload,
});

export const agriculturalPost = (payload) => ({
  type: 'AGRICULTURAL',
  payload,
});

export const productionAgroindustrialPost = (payload) => ({
  type: 'PRODUCTION_AGROINDUSTRIAL',
  payload,
});

export const productionLivestockPost = (payload) => ({
  type: 'PRODUCTION_LIVE_STOCK',
  payload,
});
//------------------------------------------------------------------------------------

export const producerPost = (payload) => ({
  type: 'PRODUCER',
  payload,
});

export const resultPost = (payload) => ({
  type: 'RESULT',
  payload,
});

export const clearProducerForms = () => ({
  type: 'CLEAR_PRODUCER_FORMS',
});

export const TokenUpdate = (payload) => ({
  type:'TOKEN_UPDATE',
  payload,
});

export const User_login_update = (payload) => ({
  type: 'USER_LOGIN_UPDATE',
  payload,
});

export const RemoveResult = (payload) => ({
  type: 'REMOVE_PRODUCER',
  payload,
});
