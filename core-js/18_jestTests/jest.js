const capitalize = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const reverseString = function (string) {
  return string.split("").reverse().join("");
};

const calculator = {
  add: function (m, n) {
    return m + n;
  },
  subtract: function (m, n) {
    return m - n;
  },
  divide: function (m, n) {
    return m / n;
  },
  multiply: function (m, n) {
    return m * n;
  },
};

module.exports = {
  capitalize,
  reverseString,
  calculator,
};
