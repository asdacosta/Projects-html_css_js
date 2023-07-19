const convertToCelsius = function(fah) {
    const cel = (fah-32) * 5/9;
    celValue = cel.toFixed(1);
    return parseFloat(celValue);
    // return fah.toFixed(1) + '°F';
};

const convertToFahrenheit = function() {
};

module.exports = {
  convertToCelsius,
  convertToFahrenheit
};