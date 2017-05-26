const utils = {
  repeatData: (obj, conut) => {
    const arr = [];
    for (let i = 0; i < conut; i++) {
      arr.push(obj);
    }
    return arr;
  },
};

module.exports = utils;
