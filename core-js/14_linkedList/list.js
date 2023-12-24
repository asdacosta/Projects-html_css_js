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

  logList() {
    if (this.head === null) {
      console.log("Empty");
      return;
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
firstLink.size();
