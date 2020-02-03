import axios from 'axios';
import {
  GET_BOOKS,
  CREATE_BOOK,
  REMOVE_BOOK,
  CHANGE_FILTER,
  EXCEPTION_ERROR,
} from './../assets/types';

export const getBooks = () => async dispatch => {
  return await axios.get('/api/v1/books')
    .then(({ data }) => {
      if (!data || !data.books) throw new Error('connection error');
      dispatch({ type: GET_BOOKS, payload: data.books });
    })
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};

export const createBook = book => async dispatch => {
  return await axios.post('/api/v1/books', { book })
    .then(({ data }) => {
      if (!data) throw new Error('connection error');
      if (data.status !== 'created') throw new Error(data.errors || 'connection error');
      dispatch({ type: CREATE_BOOK, payload: data.location });
    })
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};

export const removeBook = id => async dispatch => {
  return await axios.delete(`/api/v1/books/${id}`)
    .then(({ data }) => {
      if (!data) throw new Error('connection error');
      if (data.status !== 'destroyed') throw new Error(data.errors || 'connection error');
      dispatch({ type: REMOVE_BOOK, payload: id });
    })
    .catch(error => dispatch({ type: EXCEPTION_ERROR, payload: error }));
};

export const changeFilter = filter => ({ type: CHANGE_FILTER, filter });
