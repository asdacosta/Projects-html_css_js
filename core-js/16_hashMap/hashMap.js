class Node {
  constructor(key, value) {
    this.data = [key, value];
    this.next = null;
  }
}

class HashMap {
  constructor() {
    this.buckets = new Array(16).fill(null);
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

  set(key, value) {
    let currentNode = new Node(key, value);
    const bucket = this.hash(key);
    if (this.buckets[bucket] === null) {
      this.buckets[bucket] = currentNode;
      console.log(this.buckets);
    } else {
      this.buckets[bucket].next = currentNode;
      console.log(this.buckets);
    }
  }
}

const firstMap = new HashMap();
// firstMap.hash("Ever");
firstMap.set("DaCosta", "Silvanus");
firstMap.set("DaCosta", "Green");
