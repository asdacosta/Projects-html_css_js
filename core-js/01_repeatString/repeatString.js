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

module.exports = repeatString;