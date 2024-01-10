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

  prettyPrint();

  return { insert, prettyPrint, remove, find };
}

// const shortArray = tree([3, 1, 3, 2, 4, 5, 5, 6, 7, 10, 8, 3, 9]);
const newArray = tree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// newArray.prettyPrint();
// newArray.remove(9);
// newArray.find(9);
newArray.insert(6);
