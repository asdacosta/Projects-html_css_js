const repeatString = function(string, num) {
    let str = '';
    
    for (m = 0; m < num; m++) {
        str += string;
    }
    return str;
};

module.exports = repeatString;