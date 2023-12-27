function node(data, leftChild = null, rightChild = null) {
  return { data, leftChild, rightChild };
}

function buildTree(array) {
  // Remove duplicate elements
  const uniqueArray = array.filter((value, index, arr) => arr.indexOf(value) === index);
  uniqueArray.sort((a, b) => a - b);

  let rootIndex = Math.floor((uniqueArray.length - 1) / 2);
  console.log(rootIndex);
  let rootNode = uniqueArray[rootIndex];
  console.log(rootNode);
}

function tree(array) {
  root = buildTree(array);
  return { root };
}

const shortArray = tree([1, 2, 3, 4]);
shortArray.root;
