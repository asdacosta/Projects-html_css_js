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

// Simpler method
// Returns new array containing elements from arrs array that pass callback fxn
// Callback fxn takes each element/arr of arrs and checks if it's included in args array
// If included, returns true but '!' makes it false.
// When callback function returns true for a particular element, that element is added to the new array, otherwise it's not.

// const removeFromArray = function(arrs, ...args) {
//     return arrs.filter(arr => !args.includes(arr));
// }

module.exports = removeFromArray;