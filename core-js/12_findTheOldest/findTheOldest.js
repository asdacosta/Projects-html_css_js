const findTheOldest = function(arr) {
    let oldAge = arr.reduce((age, obj) => obj.yearOfDeath - obj.yearOfBirth > age, 0);
};

module.exports = findTheOldest;