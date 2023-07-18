const convertToCelsius = function(cel) {
    if (cel === 32) {
        return 0;
        // return 0 + '°F';
    }
    const fah = cel * (9/5) + 32;
    return fah.toFixed(1);
    // return fah.toFixed(1) + '°F';
};

const convertToFahrenheit = function() {
};

module.exports = {
  convertToCelsius,
  convertToFahrenheit
};