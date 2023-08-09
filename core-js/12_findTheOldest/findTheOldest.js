const findTheOldest = function(arr) {
    let oldAge = arr.reduce((age, obj) => {
        if (obj.yearOfDeath === undefined) {
            obj.yearOfDeath = new Date().getFullYear();;
        }
        const ageDiff = obj.yearOfDeath - obj.yearOfBirth;
        return ageDiff > age ? ageDiff : age;
        }, 0);

    for (let m = 0; m < arr.length; m++) {
        if (oldAge === arr[m].yearOfDeath - arr[m].yearOfBirth) {
            return arr[m];
        }
    }
};

module.exports = findTheOldest;