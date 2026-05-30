var wind = 11;
var temperature = 24;

const windChillElement = document.getElementById('windChill');

function calculateWindChill(temperature, wind){
    var windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temperature * Math.pow(wind, 0.16);
    return windChill.toFixed(1);
}

if (temperature <= 10 && wind > 4.8){
    windChillElement.innerHTML = `<strong>Wind Chill:</strong> ${calculateWindChill(temperature, wind)} °C`;
}
else{
    windChillElement.innerHTML = "<strong>Wind Chill:</strong> N/A";
}