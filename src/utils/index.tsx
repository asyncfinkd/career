export const isArrayEmpty = (array: any) => {
  return !Array.isArray(array) || !array.length;
};

export const isStringEmpty = (string: any) => {
  return string.length == 0 || !string;
};
