import { combineReducers } from 'redux';
import { cartReducer, storeReducer } from './cartReducer';

const rootReducer = combineReducers({
  cartList: cartReducer,
  storeList: storeReducer,
});

export default rootReducer;
