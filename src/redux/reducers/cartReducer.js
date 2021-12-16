const INITIAL_STATE = {
  currStore: [],
  searchResult: [],
  list: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        list: [...state.list, action.payload.item],
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        list: [...state.list.filter(({ id }) => id !== action.payload.id)],
      };
    case 'REQUEST_API':
      return {
        ...state,
      };
    case 'RESPONSE_API':
      return {
        ...state,
        currStore: action.payload.items,
      };
    case 'SEARCH_ITEM':
      return {
        ...state,
        searchResult: action.payload.items,
      };
    default:
      return state;
  }
};
