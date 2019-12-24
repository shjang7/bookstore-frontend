import {
  GET_BOOKS,
  CREATE_BOOK,
  REMOVE_BOOK,
} from './../assets/types';

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BOOKS:
      return payload;
    case CREATE_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return [...state.filter(({ id }) => id !== payload)];
    default:
      return state;
  }
};
