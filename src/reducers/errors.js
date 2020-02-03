import {
  EXCEPTION_ERROR,
} from './../assets/types';

export default (state = '', action) => {
  const { type, payload } = action;
  if (type === EXCEPTION_ERROR) {
    return payload;
  }
  return state;
};
