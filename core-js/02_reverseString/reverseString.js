const reverseString = function(str) {
    let reverseStr = '';
    for (m = str.length - 1; m >= 0; m--) {
        reverseStr += str[m]
    }
    return reverseStr;
};

// Simpler method
// const reverseString = function(str) {
//     return str.split('').reverse().join('');
// }

module.exports = reverseString;