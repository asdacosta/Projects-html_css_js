#!/usr/bin/node
function fibsRec(num) {
  if (num <= 0) {
    return [];
  } else if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  } else {
    const array = fibsRec(num - 1);
    array.push(array[array.length - 2] + array[array.length - 1]);
    return array;
  }
}
console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(3));
console.log(fibsRec(10));
