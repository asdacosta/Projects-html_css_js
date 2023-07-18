const palindromes = function (string) {
    // return string.split('').reverse().join('') === string;

    if (string[string.length - 1] === '!') {
        string = string.slice(0, string.length - 1);
    }

    let strReverse = '';
    for (m = string.length - 1; m >= 0; m--) {
        strReverse += string[m];
    }
    return strReverse.toLowerCase() === string.toLowerCase();
};

module.exports = palindromes;