// Current Year and Last Modified Date
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Refactored Wind Chill Calculation
const calculateWindChill = (temp, windSpeed) =>
    temp <= 10 && windSpeed > 4.8
        ? (
              13.12 +
              0.6215 * temp -
              11.37 * Math.pow(windSpeed, 0.16) +
              0.3965 * temp * Math.pow(windSpeed, 0.16)
          ).toFixed(1)
        : "N/A";

document.getElementById("windChill").textContent = calculateWindChill(10, 5);
