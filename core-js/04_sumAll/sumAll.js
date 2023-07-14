const sumAll = function(int1, int2) {
    let sum = 0;
    if (int1 < 0 || int2 < 0 || typeof int1 != 'number' || typeof int2 != 'number') {
        return 'ERROR';
    }
    for (m = Math.min(int1, int2); m <= Math.max(int1, int2); m++) {
        sum += m;
    }
    return sum;
};

module.exports = sumAll;