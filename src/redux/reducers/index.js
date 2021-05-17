import { combineReducers } from 'redux';
import phones from './reducers-phones';
import cart from './reducers-cart';

const rootReducer = combineReducers({
  phones,
  cart
});

export default rootReducer;
