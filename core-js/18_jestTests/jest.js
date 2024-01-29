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

const caesarCipher = function (string, shift) {
  const checkStringAndShiftFactor = (function () {
    if (typeof string !== "string" || typeof shift !== "number") {
      return "Enter valid arguments";
    }
  })();

  const encryptAlpInCaesarCipher = function (alp) {
    const alphabets = [];
    const getAlphabetsArray = (function () {
      for (let i = 97; i <= 122; i++) {
        alphabets.push(String.fromCharCode(i));
      }
    })();

    let encryptionIndex = alphabets.indexOf(alp.toLowerCase());
    const findCharIndex = (function () {
      let shiftFactor = shift;
      while (shiftFactor > 0) {
        encryptionIndex += 1;
        if (encryptionIndex === alphabets.length) {
          encryptionIndex = 0;
        }
        shiftFactor -= 1;
      }
    })();

    let encryptedAlp = alphabets[encryptionIndex];
    const returnCaseSensitiveChar = (function () {
      if (alp.match(/[A-Z]/)) {
        encryptedAlp = encryptedAlp.toUpperCase();
      }
    })();
    return encryptedAlp;
  };

  const encrypted = [];
  const printEncripted = (function () {
    const stringArr = string.split("");

    stringArr.forEach((char) => {
      if (char.match(/[a-zA-Z]/)) {
        const encryptedAlp = encryptAlpInCaesarCipher(char);
        encrypted.push(encryptedAlp);
        return;
      }
      encrypted.push(char);
    });
  })();

  return encrypted.join("");
};

const analyzeArray = function (array) {
  const findAverage = function () {
    const sum = array.reduce((acc, current) => acc + current);
    const avg = sum / array.length;
    return avg;
  };

  const findMin = function () {
    const min = Math.min(...array);
    return min;
  };

  return {
    average: findAverage(),
    min: findMin(),
  };
};

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
