class HashMap {
  constructor() {}

  hash(value) {
    function stringToNumber(string) {
      let hashCode = 0;
      const primeNum = 31;

      for (let m = 0; m < string.length; m++) {
        hashCode = primeNum * hashCode + string.charCodeAt(m);
      }
      return hashCode;
    }

    return stringToNumber(value);
  }
}
