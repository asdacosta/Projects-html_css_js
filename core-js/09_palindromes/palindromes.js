const palindromes = function (string) {
    return string.split('').reverse().join('') === string;
};

module.exports = palindromes;