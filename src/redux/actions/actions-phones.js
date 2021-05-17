import axios from 'axios';
// import ReduxThunk from 'redux-thunk';

export const fetchPhones = () => (dispatch) => {
  axios
    .get('http://localhost:3001/phones')
    .then(({ data }) => dispatch(setPhones(data)));
};

export const setPhones = (items) => ({
  type: 'SET_PHONES',
  payload: items
});