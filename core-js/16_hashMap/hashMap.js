class HashMap {
  constructor() {
    this.bucket = [];
  }

  hash(value) {
    if (typeof value !== "string") {
      return "Value must be a string.";
    }

    function stringToNumber(str) {
      let hashCode = 0;
      const primeNum = 31;

      for (let m = 0; m < str.length; m++) {
        hashCode = primeNum * hashCode + str.charCodeAt(m);
      }
      return hashCode % 16;
    }

    const code = stringToNumber(value);
    console.log(code);
    return code;
  }
}

const firstMap = new HashMap();
firstMap.hash("Ever");
