const convertToCelsius = function(fah) {
    if (fah === 32) {
        return 0;
        // return 0 + '°F';
    }
    const cel = (fah-32) * 5/9;
    return cel.toFixed(1);
    // return fah.toFixed(1) + '°F';
};

const convertToFahrenheit = function() {
};

module.exports = {
  convertToCelsius,
  convertToFahrenheit
};