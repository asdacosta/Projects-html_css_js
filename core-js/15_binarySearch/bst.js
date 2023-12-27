function node(data, left = null, right = null) {
  return { data, left, right };
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
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
  rootNode = buildTree(array);
  prettyPrint(rootNode);
}

const shortArray = tree([3, 1, 3, 2, 4, 5, 5, 6, 7, 10, 8, 3, 9]);
