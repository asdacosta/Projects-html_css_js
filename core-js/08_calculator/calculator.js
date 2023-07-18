const add = function(m, n) {
	return m + n;
};

const subtract = function(m, n) {
	return m - n;
};

const sum = function(args) {
    let argSum = 0;
    for (let arg of args) {
        argSum += arg;
    }
	return argSum;
};

const multiply = function(...args) {
    let argMul = 1;
    for (let arg of args) {
        argMul *= arg;
    }
    return argMul;
};

const power = function() {
	
};

const factorial = function() {
	
};


module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};