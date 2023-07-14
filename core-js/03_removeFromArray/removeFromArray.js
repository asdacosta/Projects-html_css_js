const removeFromArray = function(arrs, ...args) {
    for (const arg of args) {
        for (const arr of arrs) {
            if (arr === arg) {
                let index = arrs.indexOf(arg);
                arrs.splice(index, 1);
            }
        }
    }
    return arrs;
};

module.exports = removeFromArray;