const createStrHash = (str) => new Hashes.MD5().hex(str);

const arrayToObject = (arr, arrayKey = '') => {
  const result = {};
  let i = 0;
  arr.forEach((e) => {
    result[arrayKey ? e[arrayKey] : i] = e;
    i++;
  });
  return result;
};

const objectToArray = (obj) => Object.entries(obj).map(([key, value]) => ({ key, value }));

const objectToArray1 = (obj, withKey = false) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  if (withKey) {
    return keys.map((key, i) => ({ key, value: values[i] }));
  }
  return keys.map((key, i) => (values[i]));
};

export {
  createStrHash,
  arrayToObject,
  objectToArray,
  objectToArray1,
};
