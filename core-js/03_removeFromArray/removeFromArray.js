const removeFromArray = function(arrs, ...args) {
    for (const arg of args) {
        for (const arr of arrs) {
            if (arr === arg) {
                let index = arrs.indexOf(arg);
                arrs.splice(index, 1);
            }
        }
    }
    return arrs;
};

// Second method
// const removeFromArray = function(array, ...elements) {
//     const newArray = [];

//     for (let m = 0; m < array.length; m++) {
//         let found = false;
//         for (let i = 0; i < elements.length; i++) {
//             if (elements[i] === array[m]) {
//                 found = true;
//                 continue;
//             }
//         }
//         if (!found) {
//             newArray.push(array[m]);
//         }
//     }
//     return newArray;
// };

// Simpler method
// Returns new array containing elements from arrs array that pass callback fxn
// Callback fxn takes each element/arr of arrs and checks if it's included in args array
// If included, returns true but '!' makes it false.
// When callback function returns true for a particular element, that element is added to the new array, otherwise it's not.

// const removeFromArray = function(arrs, ...args) {
//     return arrs.filter(arr => !args.includes(arr));
// }



module.exports = removeFromArray;