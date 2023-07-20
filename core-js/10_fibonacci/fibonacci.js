const fibonacci = function(nth) {
    let fib = [1, 1],
        prevSum = 0;
    for (m = 0; m < nth - 2; m++) {
        prevSum = fib[m] + fib[m+1];
        fib.push(prevSum);
    }
    return fib[nth - 1];
};

module.exports = fibonacci;