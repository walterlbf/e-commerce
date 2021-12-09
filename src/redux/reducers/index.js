import { combineReducers } from 'redux';
import { cartReducer, storeReducer } from './cartReducer';

const rootReducer = combineReducers({
  cartList: cartReducer,
});

export default rootReducer;
