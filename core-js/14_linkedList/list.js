class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

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
    return `Number Of Nodes: ${nodeCounts}`;
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

  logList() {
    if (this.head === null) {
      console.log("Empty");
      return "Empty";
    }

    let lastNode = this.head;
    let starter = `(Head) ${lastNode.value} -> `;
    while (lastNode.nextNode !== null) {
      lastNode = lastNode.nextNode;
      starter += `${lastNode.value} -> `;
    }

    console.log(`${starter} null (Tail)`);
    return `${starter} null (Tail)`;
  }
}

const firstLink = new LinkedList();
firstLink.append(1);
firstLink.prepend(25);
firstLink.append("Ever");
firstLink.append(3);
firstLink.prepend("Vybz");
firstLink.logList();
// firstLink.size();
// firstLink.getHeadNode();
// firstLink.getTailNode();
firstLink.at(3);
firstLink.at(10);
