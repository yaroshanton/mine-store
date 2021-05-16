import { combineReducers } from 'redux';
import phonesReducer from './phones';
import cartReducer from './cart';

const rootReducer = combineReducers({
  phones: phonesReducer,
  cart: cartReducer
});

export default rootReducer;
