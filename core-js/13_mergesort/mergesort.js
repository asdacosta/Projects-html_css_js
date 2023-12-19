#!/usr/bin/node
function mergeSort(array) {
  const middle = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);

  if (leftHalf.length <= 2 && rightHalf.length <= 2) {
    if (leftHalf.length === 2) {
      leftHalf.sort((a, b) => a - b);
    }
    if (rightHalf === 2) {
      rightHalf.sort((a, b) => a - b);
    }
    let newArray = [...leftHalf, ...rightHalf];
    newArray.sort((a, b) => a - b);
    return newArray;
  } else {
    const realLeft = mergeSort(leftHalf);
    const realRight = mergeSort(rightHalf);
    let newArray = [...realLeft, ...realRight];
    newArray.sort((a, b) => a - b);
    return newArray;
  }
}
console.log(mergeSort([9, 10, 1, 5, 3, 4, 0, 11, 8, 7, 2, 6]));
