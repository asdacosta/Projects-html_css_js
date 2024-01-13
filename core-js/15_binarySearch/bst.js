function node(data, left = null, right = null) {
  return { data, left, right };
}

function buildTree(array) {
  if (array.length === 0) {
    return null;
  }
  if (array.length === 1) {
    return node(array[0]);
  }

  // Remove duplicate elements
  const uniqueArray = array.filter((value, index, arr) => arr.indexOf(value) === index);
  uniqueArray.sort((a, b) => a - b);

  let rootIndex = Math.floor((uniqueArray.length - 1) / 2);
  let rootValue = uniqueArray[rootIndex];
  let leftSubTree = uniqueArray.slice(0, rootIndex);
  let rightSubTree = uniqueArray.slice(rootIndex + 1);

  let rootNode = node(rootValue, buildTree(leftSubTree), buildTree(rightSubTree));
  return rootNode;
}

function tree(array) {
  const rootNode = buildTree(array);

  const prettyPrint = (node = rootNode, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  function insert(value) {
    let currentNode = rootNode;
    // For empty tree
    if (!currentNode) {
      currentNode = node(value);
      prettyPrint(currentNode);
      return;
    }
    if (value === currentNode.data) {
      console.log("Value already exists!");
      return;
    }

    while (currentNode.right !== null || currentNode.left !== null) {
      if (currentNode.right !== null && value === currentNode.right.data) {
        console.log("Value already exists.");
        return;
      } else if (currentNode.left !== null && value === currentNode.left.data) {
        console.log("Value already exists.");
        return;
      } else {
        if (currentNode.right !== null && value > currentNode.data) {
          currentNode = currentNode.right;
        } else if (currentNode.left !== null && value < currentNode.data) {
          currentNode = currentNode.left;
        } else if (currentNode.left === null && value < currentNode.data) {
          currentNode.left = node(value);
          prettyPrint();
          return;
        } else if (currentNode.right === null && value > currentNode.data) {
          currentNode.right = node(value);
          prettyPrint();
          return;
        }
      }
    }

    // If left and right are null
    if (value > currentNode.data) {
      currentNode.right = node(value);
    }
    if (value < currentNode.data) {
      currentNode.left = node(value);
    }
    prettyPrint();
  }

  function remove(value) {
    let currentNode = rootNode;
    // For empty tree
    if (!currentNode) {
      console.log("Tree is empty!");
      return;
    }
    if (value === currentNode.data) {
      removeNodeWithChildren(currentNode);
      prettyPrint();
      return;
    }

    function removeNodeWithSingleChild(node) {
      if (node.right !== null && node.right.right === null && node.right.left === null) {
        node.data = node.right.data;
        node.right = null;
      }
      if (node.left !== null && node.left.right === null && node.left.left === null) {
        node.data = node.left.data;
        node.left = null;
      }
    }

    function removeNodeWithChildren(node) {
      if (node.right !== null && node.left !== null) {
        let replacementNode = node.left;
        // Loop to find replacement node: Max value in left subtree
        while (replacementNode.right !== null) {
          replacementNode = replacementNode.right;
        }
        node.data = replacementNode.data;
        // Loop to remove replacement node in real tree
        let startingNode = node.left;
        currentNode = node;
        let isFirstNode = true;
        while (startingNode.right !== null) {
          currentNode = startingNode;
          startingNode = startingNode.right;
          isFirstNode = false;
        }
        if (isFirstNode) {
          currentNode.left = null;
        } else {
          currentNode.right = null;
        }
      }
    }

    while (currentNode.right !== null || currentNode.left !== null) {
      if (currentNode.right !== null && value === currentNode.right.data) {
        // Remove node with no child
        if (currentNode.right.right === null && currentNode.right.left === null) {
          currentNode.right = null;
          prettyPrint();
          return;
        }
        removeNodeWithSingleChild(currentNode.right);
        removeNodeWithChildren(currentNode.right);
        prettyPrint();
        return;
      } else if (currentNode.left !== null && value === currentNode.left.data) {
        // Remove node with no child
        if (currentNode.left.right === null && currentNode.left.left === null) {
          currentNode.left = null;
          prettyPrint();
          return;
        }
        removeNodeWithSingleChild(currentNode.left);
        removeNodeWithChildren(currentNode.left);
        prettyPrint();
        return;
      } else {
        if (currentNode.right !== null && value > currentNode.data) {
          currentNode = currentNode.right;
        } else if (currentNode.left !== null && value < currentNode.data) {
          currentNode = currentNode.left;
        }
      }
    }

    if (value === currentNode.data) {
      currentNode.data = null;
      prettyPrint();
    } else {
      console.log("Value not found.");
    }
  }

  function find(value) {
    let currentNode = rootNode;
    // For empty tree
    if (!currentNode) {
      console.log("Tree is empty!");
      return;
    }
    if (value === currentNode.data) {
      console.log(currentNode);
      return;
    }

    while (currentNode.right !== null || currentNode.left !== null) {
      if (currentNode.right !== null && value === currentNode.right.data) {
        console.log(currentNode.right);
        return;
      } else if (currentNode.left !== null && value === currentNode.left.data) {
        console.log(currentNode.left);
        return;
      } else {
        if (currentNode.right !== null && value > currentNode.data) {
          currentNode = currentNode.right;
        } else if (currentNode.left !== null && value < currentNode.data) {
          currentNode = currentNode.left;
        }
      }
    }

    if (value === currentNode.data) {
      console.log(currentNode);
      return;
    } else {
      console.log(currentNode);
      console.log(`There is no node with value ${value}`);
    }
  }

  // Breadth first level order
  function levelOrder(callback) {
    let currentNode = rootNode;
    // For empty node
    if (!currentNode) {
      console.log("Tree is empty!");
      return;
    }

    let resultArray = [];
    let queue = [currentNode];

    function updateArrays() {
      resultArray.push(queue[0].data);
      // If a callback function arg is used
      if (callback) {
        callback(queue[0].data);
      }
      queue.shift();
    }
    updateArrays();

    // For single node tree
    if (currentNode.right === null && currentNode.left === null) {
      return;
    }

    while (currentNode.right !== null || currentNode.left !== null) {
      if (currentNode.right !== null && currentNode.left !== null) {
        queue.push(currentNode.left);
        queue.push(currentNode.right);
        currentNode = queue[0];
        updateArrays();
      } else if (currentNode.right !== null && currentNode.left === null) {
        queue.push(currentNode.right);
        currentNode = queue[0];
        updateArrays();
      } else if (currentNode.left !== null && currentNode.right === null) {
        queue.push(currentNode.left);
        currentNode = queue[0];
        updateArrays();
      }
      if (currentNode.left === null && currentNode.right === null && queue.length > 1) {
        currentNode = queue[0];
      }
    }

    queue.shift();
    // Account for left over nodes
    while (queue.length > 0 && resultArray[resultArray.length - 1] !== queue[0].data) {
      updateArrays();
    }
    if (!callback) {
      console.log(resultArray);
    }
  }

  // Depth first order: left-root-right
  function inOrder(callback) {
    let currentNode = rootNode;
    const resultArray = [];
    const stack = [];

    while (currentNode !== null || stack.length > 0) {
      while (currentNode !== null) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      }

      currentNode = stack.pop();
      resultArray.push(currentNode.data);
      currentNode = currentNode.right;
    }

    if (typeof callback === "function") {
      resultArray.forEach(callback);
    } else {
      console.log(resultArray);
      return resultArray;
    }
  }

  // Depth first order: root-left-right
  function preOrder(callback) {
    let currentNode = rootNode;
    const resultArray = [];
    const stack = [];

    while (currentNode !== null || stack.length > 0) {
      while (currentNode !== null) {
        resultArray.push(currentNode.data);

        if (currentNode.right !== null) {
          stack.push(currentNode.right);
        }

        currentNode = currentNode.left;
      }

      if (stack.length > 0) {
        currentNode = stack.pop();
      }
    }

    if (typeof callback === "function") {
      resultArray.forEach(callback);
    } else {
      console.log(resultArray);
    }
  }

  // Depth first order: left-right-root
  function postOrder(callback) {
    let currentNode = rootNode;
    const resultArray = [];
    const stack1 = [];
    const stack2 = [];

    if (currentNode !== null) {
      stack1.push(currentNode);
    }

    while (stack1.length > 0) {
      currentNode = stack1.pop();
      stack2.push(currentNode.data);

      if (currentNode.left !== null) {
        stack1.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        stack1.push(currentNode.right);
      }
    }

    while (stack2.length > 0) {
      resultArray.push(stack2.pop());
    }

    if (typeof callback === "function") {
      resultArray.forEach(callback);
    } else {
      console.log(resultArray);
    }
  }

  function height(value) {
    let currentNode = rootNode;
    if (currentNode === null) {
      return;
    }

    // Uxe root node if no value is specified
    if (!value) {
      value = currentNode.data;
    }

    let edges = 0;
    while (currentNode !== null) {
      if (value === currentNode.data) {
        if (currentNode.right === null && currentNode.left === null) {
          console.log(`Height of node ${value} is 0`);
          return;
        } else {
          // Traverse only right nodes since right nodes >= left nodes
          while (currentNode.right !== null) {
            edges += 1;
            currentNode = currentNode.right;
          }
          console.log(`Height of node ${value} is ${edges}`);
          return;
        }
      } else {
        if (currentNode.right !== null && value > currentNode.data) {
          currentNode = currentNode.right;
        } else if (currentNode.left !== null && value < currentNode.data) {
          currentNode = currentNode.left;
        } else {
          console.log("There exists no such node.");
          return;
        }
      }
    }
  }

  function depth(value) {
    let currentNode = rootNode;
    if (currentNode === null) {
      console.log("Tree is empty!");
      return;
    }
    // Uxe root node if no value is specified
    if (!value) {
      value = currentNode.data;
    }

    let edges = 0;
    if (value === currentNode.data) {
      console.log(`Depth of node ${value} is ${edges}`);
      return;
    }

    while (currentNode.right !== null || currentNode.left !== null) {
      if (currentNode.right !== null && value === currentNode.right.data) {
        edges += 1;
        console.log(`Depth of node ${value} is ${edges}`);
        return;
      } else if (currentNode.left !== null && value === currentNode.left.data) {
        edges += 1;
        console.log(`Depth of node ${value} is ${edges}`);
        return;
      } else {
        if (currentNode.right !== null && value > currentNode.data) {
          edges += 1;
          currentNode = currentNode.right;
        } else if (currentNode.left !== null && value < currentNode.data) {
          edges += 1;
          currentNode = currentNode.left;
        }
      }
    }

    if (value === currentNode.data) {
      edges += 1;
      console.log(`Depth of node ${value} is ${edges}`);
      return;
    } else {
      console.log(`There is no node with value ${value}`);
    }
  }

  function isBalanced() {
    let currentNode = rootNode;
    // For empty node
    if (!currentNode) {
      console.log("Tree is empty!");
      return;
    }

    let queue = [currentNode];
    // For single node tree
    if (currentNode.right === null && currentNode.left === null) {
      console.log("Tree is balanced.");
      return true;
    }

    function updateNodeAndQueue() {
      currentNode = queue[0];
      queue.shift();
    }

    while (currentNode.right !== null || currentNode.left !== null) {
      if (currentNode.right !== null && currentNode.left !== null) {
        queue.push(currentNode.left);
        queue.push(currentNode.right);
        updateNodeAndQueue();
      } else if (currentNode.right !== null && currentNode.left === null) {
        if (currentNode.right.right !== null) {
          console.log("Tree is not balanced");
          return false;
        }

        queue.push(currentNode.right);
        updateNodeAndQueue();
      } else if (currentNode.left !== null && currentNode.right === null) {
        if (currentNode.left.left !== null) {
          console.log("1");
          console.log("Tree is not balanced");
          return false;
        }

        queue.push(currentNode.left);
        updateNodeAndQueue();
      }
      if (currentNode.left === null && currentNode.right === null && queue.length > 1) {
        currentNode = queue[0];
      }
    }

    queue.shift();
    // Account for left over nodes
    while (queue.length > 0) {
      if (
        currentNode.right !== null &&
        currentNode.right.right !== null &&
        currentNode.left === null
      ) {
        console.log("Tree is not balanced");
        return false;
      }
      if (
        currentNode.left !== null &&
        currentNode.left.left !== null &&
        currentNode.right === null
      ) {
        console.log("Tree is not balanced");
        return false;
      }

      updateNodeAndQueue();
    }

    // If it is balanced
    console.log("Tree is balanced");
    return true;
  }

  function rebalance() {
    let currentNode = rootNode;
    // For empty node
    if (!currentNode) {
      console.log("Tree is empty!");
      return;
    }

    if (!isBalanced()) {
      // Take current array to create new tree
      let valuesArray = inOrder();
      console.log("There is your balanced tree:");
      currentNode = tree(valuesArray);
      return currentNode;
    } else {
      console.log("Already balanced");
      return;
    }
  }

  prettyPrint();

  return {
    insert,
    prettyPrint,
    remove,
    find,
    levelOrder,
    inOrder,
    preOrder,
    postOrder,
    height,
    depth,
    isBalanced,
    rebalance,
  };
}

// Optional callback functions for levelOrder(), inOrder(), preOrder(), postOrder().
function printNodes(node) {
  console.log(node);
}

let sum = 0;
function sumPrevNodes(node) {
  sum += node;
  console.log(sum);
}

// const shortArray = tree([3, 1, 3, 2, 4, 5, 5, 6, 7, 10, 8, 3, 9]);
// shortArray.levelOrder();
// const newArray = tree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// newArray.insert(10);
// newArray.insert(11);
// newArray.rebalance();

// newArray.isBalanced();
// newArray.insert(10);
// newArray.isBalanced();

// newArray.depth();
// newArray.height(5);
// newArray.postOrder();
// newArray.preOrder();
// newArray.inOrder();
// newArray.inOrder(printNodes);
// newArray.levelOrder();
// newArray.levelOrder(printNodes);
// newArray.levelOrder(sumPrevNodes);
// const emptyArray = tree([]);
// emptyArray.height();
// emptyArray.levelOrder();
// emptyArray.insert(1);
// emptyArray.find(0);
// newArray.prettyPrint();
// newArray.remove(9);
// newArray.find(9);
// newArray.insert(6);

export { tree };
