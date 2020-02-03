import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';
import errors from './errors';

export default combineReducers({
  books,
  filter,
  errors,
});
