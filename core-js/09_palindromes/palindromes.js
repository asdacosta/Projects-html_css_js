const palindromes = function (string) {
    // return string.split('').reverse().join('') === string;

    let strReverse = '';
    for (m = string.length - 1; m >= 0; m--) {
        strReverse += string[m];
    }
    return strReverse === string;
};

module.exports = palindromes;