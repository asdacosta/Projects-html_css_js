class Node {
  constructor(key, value) {
    this.data = [key, value];
    this.next = null;
  }
}

class HashMap {
  constructor() {
    this.buckets = new Array(16).fill(null);
    this.head = null;
  }

  hash(value) {
    if (typeof value !== "string") {
      return "Value must be a string.";
    }

    const stringToNumber = (str) => {
      let hashCode = 0;
      const primeNum = 31;

      for (let m = 0; m < str.length; m++) {
        hashCode = primeNum * hashCode + str.charCodeAt(m);
      }
      return hashCode % this.buckets.length;
    };

    const code = stringToNumber(value);
    return code;
  }

  set(key, value) {
    const bucket = this.hash(key);
    const traverseBucketToUpdateExistingKeyValue = (() => {
      let bucketNode = this.buckets[bucket];
      while (bucketNode !== null) {
        if (key === bucketNode.data[0]) {
          bucketNode.data[1] = value;
          console.log(this.buckets);
          return;
        }
        bucketNode = bucketNode.next;
      }
    })();

    const populateBucket = (() => {
      let currentNode = new Node(key, value);
      if (this.buckets[bucket] === null) {
        this.head = currentNode;
        this.buckets[bucket] = this.head;
        console.log(this.buckets);
      } else {
        let bucketNode = this.buckets[bucket];
        while (bucketNode.next !== null) {
          bucketNode = bucketNode.next;
        }
        bucketNode.next = currentNode;
        console.log(this.buckets);
      }
    })();

    const updateCapacity = (() => {
      let bucketsPopulated = 0;
      const getPopulatedBucketsNumber = (() => {
        this.buckets.forEach((index) => {
          if (index !== null) {
            bucketsPopulated += 1;
          }
        });
      })();

      const capacity = this.buckets.length;
      let loadFactor = bucketsPopulated / capacity;
      console.log(`Populated: ${bucketsPopulated}, Load Factor: ${loadFactor}`);
      if (loadFactor >= 0.75) {
        let extraSize = this.buckets.length * 2 - this.buckets.length;
        for (let m = 0; m <= extraSize; m++) {
          this.buckets.push(null);
        }
      }
    })();
  }

  get(key) {
    const bucket = this.hash(key);
    let bucketNode = this.buckets[bucket];

    while (bucketNode !== null) {
      if (key === bucketNode.data[0]) {
        console.log(`The value of ${key} is`, bucketNode.data[1]);
        return;
      }
      bucketNode = bucketNode.next;
    }

    console.log(`The key "${key}" not found.`);
    return null;
  }

  has(key) {
    const bucket = this.hash(key);
    let bucketNode = this.buckets[bucket];

    while (bucketNode !== null) {
      if (key === bucketNode.data[0]) {
        console.log(`The key ${key} exists.`);
        return true;
      }
      bucketNode = bucketNode.next;
    }

    console.log(`The key "${key}" doesn't exist.`);
    return false;
  }

  remove(key) {
    const bucket = this.hash(key);
    let bucketNode = this.buckets[bucket];

    if (bucketNode === null) {
      console.log(`The key ${key} doesn't exist.`);
      return;
    } else {
      // For single node
      if (bucketNode !== null && bucketNode.next === null) {
        this.buckets[bucket] = null;
        console.log(this.buckets);
        return;
        // For multiple nodes
      } else {
        let firstNode = 0;
        while (bucketNode !== null) {
          firstNode += 1;
          // First node in multiple nodes
          if (key === bucketNode.data[0] && firstNode === 1) {
            this.buckets[bucket] = bucketNode.next;
            console.log(this.buckets);
            return;
            // For at least second node in multiple nodes
          } else if (key === bucketNode.next.data[0] && firstMap !== 1) {
            // For middle nodes
            if (bucketNode.next.next !== null) {
              bucketNode.next = bucketNode.next.next;
              console.log(this.buckets);
              // For single nodes
            } else {
              bucketNode.next = null;
              console.log(this.buckets);
            }
            return;
          }
          bucketNode = bucketNode.next;
        }
      }
    }
  }

  length() {
    let storedKeys = 0;
    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        while (bucket !== null) {
          storedKeys += 1;
          bucket = bucket.next;
        }
      }
    });

    console.log("Number of stored keys:", storedKeys);
    return storedKeys;
  }

  clear() {
    this.buckets.forEach((bucket, index) => {
      this.buckets[index] = null;
    });
    console.log(this.buckets);
  }

  keys() {
    let keysBox = [];
    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        while (bucket !== null) {
          keysBox.push(bucket.data[0]);
          bucket = bucket.next;
        }
      }
    });

    console.log(keysBox);
    return keysBox;
  }
}

const firstMap = new HashMap();
// firstMap.hash("Ever");

// Checks if existing key's value can be updated:
// firstMap.set("DaCosta", "Silvanus");
// firstMap.set("DaCosta", "Green");

// Checks validity of length(), keys(), clear():
firstMap.set("apple", "1");
firstMap.set("banana", "2");
firstMap.set("orange", "3");
firstMap.set("grape", "4");
firstMap.set("Evre", "Green");
firstMap.set("Eerv", "Blue");
firstMap.set("reEv", "Grey");
// firstMap.length();
firstMap.keys();
// firstMap.clear();

// Checks if exceeded load Factor can increase buckets size:
// firstMap.set("apple", "1");
// firstMap.set("banana", "2");
// firstMap.set("orange", "3");
// firstMap.set("grape", "4");
// firstMap.set("kiwi", "5");
// firstMap.set("watermelon", "6");
// firstMap.set("pineapple", "7");
// firstMap.set("strawberry", "8");
// firstMap.set("blueberry", "9");
// firstMap.set("peach", "10");
// firstMap.set("mango", "11");
// firstMap.set("pear", "12");
// firstMap.set("cherry", "13");
// firstMap.set("lemon", "14");
// firstMap.set("lime", "15");
// firstMap.set("avocado", "16");

// Checks for validity of get(), has():
// firstMap.set("Ever", "Green");
// firstMap.get("Ever");
// firstMap.get("Evergreen");=
// firstMap.has("Ever");
// firstMap.has("Evergreen");

// Checks for validity of remove():
// Case 1: One node
// firstMap.set("Ever", "Green");
// firstMap.remove("Ever");
// Case 2: Remove first node
// firstMap.set("Evre", "Green");
// firstMap.set("Eerv", "Blue");
// firstMap.remove("Evre");
// Case 3: Remove last node
// firstMap.set("Evre", "Green");
// firstMap.set("Eerv", "Blue");
// firstMap.remove("Eerv");
// Case 4: Remove middle node
// firstMap.set("Evre", "Green");
// firstMap.set("Eerv", "Blue");
// firstMap.set("reEv", "Grey");
// firstMap.remove("Eerv");
// Case 5: To make sure it removes from specific this.head, and not random this.head in another bucket
// firstMap.set("Evre", "Green");
// firstMap.set("Eerv", "Blue");
// firstMap.set("reEv", "Grey");
// firstMap.set("Silva", "Yellow");
// firstMap.set("ailvS", "Light");
// firstMap.remove("Evre");
// firstMap.remove("Silva");
