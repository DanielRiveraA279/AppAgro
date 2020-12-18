export const loginRequest = (payload) => ({
  type: 'SHOW_USER',
  payload,
});

export const producerPostLocal = (payload) => ({
  type: 'PRODUCER_POST_LOCAL',
  payload,
});

export const producerPostActivity = (payload) => ({
  type: 'PRODUCER_ACTIVITY',
  payload,
});
