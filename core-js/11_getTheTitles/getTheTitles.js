const getTheTitles = function(array) {
    let values1 = Object.values(array[0]);
    let values2 = Object.values(array[1]);
    let title = [values1[0], values2[0]];
    return title;
};

// Simpler method
// const getTheTitles = function(array) {
//     return array.map((book) => book.title);
// }

module.exports = getTheTitles;