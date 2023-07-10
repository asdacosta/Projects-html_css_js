const repeatString = function(string, num) {
    let str = '';
    
    if (num < 0) {
        return 'ERROR';
    }
    for (m = 0; m < num; m++) {
        str += string;
    }
    return str;

};

// Simpler method
// const repeatString = function(string, num) {
//     if (num < 0) {
//         return 'ERROR';
//     } else {
//         return string.repeat(num);
//     }
// }

module.exports = repeatString;