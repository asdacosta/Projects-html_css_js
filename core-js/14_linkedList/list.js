class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

// Indexes of list starts from 1
class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      // Initialize to head to be able to traverse from head
      let lastNode = this.head;
      // Traverse list to find last node
      while (lastNode.nextNode !== null) {
        lastNode = lastNode.nextNode;
      }
      // Set last node to new node
      lastNode.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    const list = this.head; // Take ref of existing list

    this.head = newNode;
    this.head.nextNode = list;
  }

  size() {
    let nodeCounts = 0;

    if (this.head === null) {
      return nodeCounts;
    }

    nodeCounts = 1;
    let lastNode = this.head;
    while (lastNode.nextNode !== null) {
      lastNode = lastNode.nextNode;
      nodeCounts += 1;
    }
    console.log(`Number Of Nodes: ${nodeCounts}`);
    return nodeCounts;
  }

  getHeadNode() {
    console.log(this.head);
    return this.head;
  }

  getTailNode() {
    if (this.head === null) {
      return "Empty";
    }

    let lastNode = this.head;
    while (lastNode.nextNode !== null) {
      lastNode = lastNode.nextNode;
    }
    console.log(lastNode);
    return lastNode;
  }

  at(index) {
    let nodeCounts = 0;

    if (this.head === null) {
      console.log("Empty");
      return "Empty";
    }

    nodeCounts = 1;
    let lastNode = this.head;
    while (lastNode.nextNode !== null) {
      if (index === nodeCounts) {
        console.log(lastNode);
        return lastNode;
      }
      lastNode = lastNode.nextNode;
      nodeCounts += 1;
    }

    // Catch last node
    if (index === nodeCounts) {
      console.log(lastNode);
      return lastNode;
    }

    console.log("Kindly enter a reasonable index.");
    return "Kindly enter a reasonable index.";
  }

  pop() {
    if (this.head === null) {
      return "No node to Pop :(";
    }

    const lastButOneNode = this.at(this.size() - 1);
    lastButOneNode.nextNode = null;
  }

  contains(value) {
    let lastNode = this.head;

    while (lastNode.nextNode !== null) {
      if (lastNode.value === value) {
        console.log("True");
        return true;
      }
      lastNode = lastNode.nextNode;
    }
    console.log("False");
    return false;
  }

  find(value) {
    let doesItContain = this.contains(value);

    if (doesItContain) {
      let nodeCounts = 1;
      let lastNode = this.head;

      while (lastNode.nextNode !== null) {
        if (lastNode.value === value) {
          console.log(`The index is ${nodeCounts}`);
          return nodeCounts;
        }
        lastNode = lastNode.nextNode;
        nodeCounts += 1;
      }
    }

    console.log("Null");
    return null;
  }

  toString() {
    if (this.head === null) {
      console.log("Empty");
      return "Empty";
    }

    let lastNode = this.head;
    let starter = `[Head] ( ${lastNode.value} ) -> `;
    while (lastNode.nextNode !== null) {
      lastNode = lastNode.nextNode;
      starter += `( ${lastNode.value} ) -> `;
    }

    console.log(`${starter} null [Tail]`);
    return `${starter} null [Tail]`;
  }

  insertAt(value, index) {
    if (index < 1 || index > this.size() + 1) {
      console.log("Define an appropriate index.");
      return;
    }

    const newNode = new Node(value);
    if (this.head === null && index === 1) {
      this.head = newNode;
      return;
    }
    if (this.head !== null && index === 1) {
      this.prepend(newNode.value);
      return;
    }
    if (this.head !== null && index === this.size() + 1) {
      this.append(newNode.value);
      return;
    }

    let nodeCounts = 1;
    let lastNode = this.head;
    let listStart = this.head;
    let captureListStart = listStart;
    let captureListEnd = null;

    function insertNewNode() {
      while (captureListStart.nextNode !== null) {
        captureListStart = captureListStart.nextNode;
      }
      newNode.nextNode = captureListEnd;
      captureListStart.nextNode = newNode;
    }

    // Split list
    while (lastNode.nextNode !== null) {
      lastNode = lastNode.nextNode;
      if (index - 1 === nodeCounts) {
        listStart.nextNode = null;
        captureListEnd = lastNode;
        insertNewNode();
        return;
      }
      listStart = listStart.nextNode;
      nodeCounts += 1;
    }
  }

  removeAt(index) {
    if (index < 1 || index > this.size() + 1) {
      console.log("Define an appropriate index.");
      return;
    }
    if (this.head === null) {
      console.log("There's no node to remove.");
      return;
    }
    // Remove first node
    if (this.head !== null && index === 1) {
      this.head = this.head.nextNode;
      return;
    }
    // Remove last node
    if (this.head !== null && index === this.size()) {
      this.pop();
      return;
    }

    let nodeCounts = 1;
    let lastNode = this.head;
    let listStart = this.head;
    let captureListStart = listStart;
    let captureListEnd = null;

    function removeNode() {
      while (captureListStart.nextNode !== null) {
        captureListStart = captureListStart.nextNode;
      }
      captureListEnd = captureListEnd.nextNode;
      captureListStart.nextNode = captureListEnd;
    }

    // Split list
    while (lastNode.nextNode !== null) {
      lastNode = lastNode.nextNode;
      if (index - 1 === nodeCounts) {
        listStart.nextNode = null;
        captureListEnd = lastNode;
        removeNode();
        return;
      }
      listStart = listStart.nextNode;
      nodeCounts += 1;
    }
  }
}

// const firstLink = new LinkedList();
// firstLink.append(1);
// firstLink.prepend(25);
// firstLink.append("Ever");
// firstLink.append(3);
// firstLink.prepend("Vybz");
// firstLink.toString();
// firstLink.insertAt(10, 2);
// firstLink.removeAt(3);
// firstLink.toString();
// firstLink.find(1);
// firstLink.find(2);
// firstLink.contains("Ever");
// firstLink.contains(4);
// firstLink.size();
// firstLink.pop();
// firstLink.getHeadNode();
// firstLink.getTailNode();
// firstLink.at(3);
// firstLink.at(10);
