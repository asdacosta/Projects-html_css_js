const palindromes = function (string) {
    let str = '';
    for (n = 0; n <= string.length - 1; n++) {
        if (string[n] === '!' || string[n] === ',' || string[n] === '.' || string[n] === ' ') {
            continue;
        }
        str += string[n];
    }

    let strReverse = '';
    for (m = str.length - 1; m >= 0; m--) {
        strReverse += str[m];
    }
    return strReverse.toLowerCase() === str.toLowerCase();
};


// Simpler method
// const palindromes = function (string) {
//     NewStr = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     RevStr = NewStr.split('').reverse().join('');
//     return RevStr === NewStr;
// };

module.exports = palindromes;