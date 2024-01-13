import { tree } from "./bst.js";

const getRandomArray = function (num) {
  if (num > 50) {
    console.log("Max size of array that can be generated is 50, so that will be used.");
    num = 50;
  }
  if (!num) {
    console.log("Since you failed to specify, an array size of 50 will be used.");
    num = 50;
  }

  const randomArray = [];
  for (let m = 0; m < num + 1; m++) {
    const randomNum = Math.floor(Math.random() * (100 + 1));
    randomArray.push(randomNum);
  }

  randomArray.sort((a, b) => a - b);
  console.log(randomArray);
  return randomArray;
};

const scriptTree = tree(getRandomArray());
// Confirm tree is balanced
scriptTree.isBalanced();
// Print out elements in all different forms
scriptTree.levelOrder();
scriptTree.preOrder();
scriptTree.postOrder();
scriptTree.inOrder();
// Unbalance tree by multiple insertions
for (let m = 0; m < 10; m++) {
  const randomNum = Math.floor(Math.random() * (100 + 1));
  scriptTree.insert(randomNum);
}
// Confirm tree is unbalanced
scriptTree.isBalanced();
// Balance tree
const balanced = scriptTree.rebalance();
// Confirm tree is balanced
balanced.isBalanced();
// Print out elements in all different forms
balanced.levelOrder();
balanced.preOrder();
balanced.postOrder();
balanced.inOrder();
