const sumAll = function(int1, int2) {
    let sum = 0;
    for (m = Math.min(int1, int2); m <= Math.max(int1, int2); m++) {
        sum += m;
    }
    return sum;
};

module.exports = sumAll;