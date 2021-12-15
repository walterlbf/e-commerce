const INITIAL_STATE = {
  currStore: [],
  list: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
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
        currStore: action.payload.items,
      };
    default:
      return state;
  }
};

// export const storeReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'REQUEST_API':
//       return {
//         ...state,
//       };
//     case 'RESPONSE_API':
//       return {
//         ...state,
//         currStore: action.payload.items,
//       };
//     default:
//       return state;
//   }
// };
