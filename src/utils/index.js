const isFalsy = (value) => (value === 0 ? false : !value);
export const clearObj = function (obj) {
  let result = { ...obj };
  // debugger
  Object.keys(result).forEach((key) => {
    if (isFalsy(result[key])) {
      delete result[key];
    }
  });
  return result;
};
