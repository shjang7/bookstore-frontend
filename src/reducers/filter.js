export default (state = 'all', action) => {
  const { type, filter } = action;
  if (type === 'CHANGE_FILTER') {
    return filter;
  }
  return state;
};
