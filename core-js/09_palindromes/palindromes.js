const palindromes = function (string) {
    // return string.split('').reverse().join('') === string;

    // if (string[string.length - 1] === '!') {
    //     string = string.slice(0, string.length - 1);
    // }

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

module.exports = palindromes;