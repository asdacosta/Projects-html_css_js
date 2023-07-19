const convertToCelsius = function(cel) {
    const fah = cel * (9/5) + 32;
    return `{fah.toFixed(1)}°F`;
};

const convertToFahrenheit = function() {
};

module.exports = {
  convertToCelsius,
  convertToFahrenheit
};