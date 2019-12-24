import {
  GET_BOOKS,
  CREATE_BOOK,
  REMOVE_BOOK,
} from './../assets/types';

export default (state = [], action) => {
  const { type, book, payload } = action;
  switch (type) {
    case GET_BOOKS:
      return payload;
    case CREATE_BOOK:
      return [...state, book];
    case REMOVE_BOOK:
      return [...state.filter(data => data !== book)];
    default:
      return state;
  }
};
