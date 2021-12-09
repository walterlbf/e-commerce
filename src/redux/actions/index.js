// import * as Api from '../services/Api';
const url = 'https://wine-back-test.herokuapp.com/products?page=1&limit=10';

export const addItemToCart = (item) => ({
  type: 'ADD_ITEM',
  payload: {
    item,
  },
});

export const deleteItem = (id) => ({
  type: 'DELETE_ITEM',
  payload: {
    id,
  },
});

const requestApi = () => ({
  type: 'REQUEST_API',
});

const responseApi = (items) => ({
  type: 'RESPONSE_API',
  payload: {
    items,
  },
});

export function fetchCurr() {
  return async (dispatch) => {
    dispatch(requestApi());
    const request = await fetch(url);
    const { items } = await request.json();
    return dispatch(responseApi(items));
  };
}
