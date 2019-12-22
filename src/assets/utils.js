export const generateId = () => {
  return Math.floor(Math.random() * 1000);
};

export const capitalize = (str) => {
  if (str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1);
};
