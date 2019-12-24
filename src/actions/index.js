import axios from 'axios';
import {
  GET_BOOKS,
  BOOK_ERROR,
  CREATE_BOOK,
  REMOVE_BOOK,
  CHANGE_FILTER,
} from './../assets/types';

export const getBooks = () => async dispatch => {
  try {
    const { data } = await axios.get('books');
    dispatch({
      type: GET_BOOKS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: BOOK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const createBook = book => ({ type: CREATE_BOOK, book });
export const removeBook = book => ({ type: REMOVE_BOOK, book });


export const changeFilter = filter => ({ type: CHANGE_FILTER, filter });
