#!/usr/bin/node
function mergeSort(array) {
  if (array.length === 1 || array.length === 0) {
    return array;
  } else {
    const middle = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middle);
    console.log(leftHalf);
    const rightHalf = array.slice(middle);
    console.log(rightHalf);

    if (leftHalf.length === 1 && rightHalf.length === 1) {
      let newArray = [...leftHalf, ...rightHalf];
      newArray.sort((a, b) => a - b);
      return newArray;
    } else if (leftHalf.length === 1 && rightHalf.length === 2) {
      rightHalf.sort((a, b) => a - b);
      let newArray = [...leftHalf, ...rightHalf];
      newArray.sort((a, b) => a - b);
      return newArray;
    } else if (leftHalf.length === 2 && rightHalf.length === 1) {
      leftHalf.sort((a, b) => a - b);
      let newArray = [...leftHalf, ...rightHalf];
      newArray.sort((a, b) => a - b);
      return newArray;
    } else if (leftHalf.length === 2 && rightHalf.length === 2) {
      leftHalf.sort((a, b) => a - b);
      rightHalf.sort((a, b) => a - b);
      let newArray = [...leftHalf, ...rightHalf];
      newArray.sort((a, b) => a - b);
      return newArray;
    } else {
      const realLeft = mergeSort(leftHalf);
      console.log(realLeft);
      const realRight = mergeSort(rightHalf);
      console.log(realRight);
      let newArray = [...realLeft, ...realRight];
      newArray.sort((a, b) => a - b);
      return newArray;
    }
  }
}
console.log(mergeSort([9, 10, 1, 5, 3, 4, 0, 11, 8, 7, 2, 6]));

// console.log(mergeSort([1, 2, 3, 4, 5]));
