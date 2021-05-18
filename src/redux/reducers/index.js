import { combineReducers } from 'redux';
import phones from './reducers-phones';
import cart from './reducers-cart';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  phones,
  cart,
  form: formReducer
});

export default rootReducer;
