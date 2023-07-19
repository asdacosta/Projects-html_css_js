const convertToCelsius = function(fah) {
    const cel = (fah-32) * 5/9;
    celValue = cel.toFixed(1);
    return parseFloat(celValue);
    // return fah.toFixed(1) + '°F';
};

const convertToFahrenheit = function(cel) {
    const fah = cel * (9/5) + 32;
    fahValue = fah.toFixed(1);
    return parseFloat(fahValue);
};

module.exports = {
  convertToCelsius,
  convertToFahrenheit
};