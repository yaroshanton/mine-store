const initialState = {
  items: []
};

const phones = (state = initialState, actions) => {
  if (actions.type === 'SET_PHONES') {
    return {
      ...state,
      items: actions.payload
    };
  }
  return state;
};

export default phones;