const capitalize = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const reverseString = function (string) {
  return string.split("").reverse().join("");
};

module.exports = {
  capitalize,
  reverseString,
};
