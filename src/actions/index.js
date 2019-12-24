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

export const createBook = book => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const { data } = await axios.post('books', book, config);

    dispatch({
      type: CREATE_BOOK,
      payload: data
    });
  } catch ({ response }) {
    dispatch({
      type: BOOK_ERROR,
      payload: { msg: response.statusText, status: response.status },
    });
  }
};

export const removeBook = id => async dispatch => {
  try {
    await axios.delete(`books/${id}`);
    dispatch({
      type: REMOVE_BOOK,
      payload: id,
    });
  } catch ({ response }) {
    dispatch({
      type: BOOK_ERROR,
      payload: { msg: response.statusText, status: response.status },
    });
  }
};

export const changeFilter = filter => ({ type: CHANGE_FILTER, filter });
