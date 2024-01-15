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
      // Populate bucket
      if (this.buckets[bucket] === null) {
        this.buckets[bucket] = currentNode;
        console.log(this.buckets);
      } else {
        this.buckets[bucket].next = currentNode;
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
}

const firstMap = new HashMap();
// firstMap.hash("Ever");

// Checks if existing key's value can be updated
// firstMap.set("DaCosta", "Silvanus");
// firstMap.set("DaCosta", "Green");

// Checks if exceeded load Factor can increase buckets size
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

firstMap.set("Ever", "Green");
firstMap.get("Ever");
firstMap.get("Evergreen");
