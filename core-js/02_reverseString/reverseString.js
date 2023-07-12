const reverseString = function(str) {
    let reverseStr = '';
    for (m = str.length - 1; m >= 0; m--) {
        reverseStr += str[m]
    }
    return reverseStr;
};

module.exports = reverseString;