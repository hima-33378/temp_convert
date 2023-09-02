document.getElementById("convertBtn").addEventListener("click", function () {
  const temperatureInput = document.getElementById("temperature");
  const fromScaleSelect = document.getElementById("fromScale");
  const toScaleSelect = document.getElementById("toScale");
  const resultParagraph = document.getElementById("result");

  if (temperatureInput.value === "") {
    resultParagraph.textContent = "Please enter a temperature.";
    resultParagraph.style.color = "#ff5555";
    return;
  }

  const temperature = parseFloat(temperatureInput.value);
  const fromScale = fromScaleSelect.value;
  const toScale = toScaleSelect.value;

  if (fromScale === toScale) {
    resultParagraph.textContent = "Select different scales for conversion.";
    resultParagraph.style.color = "#ff5555";
    return;
  }

  // Conversion logic based on selected scales
  let convertedTemperature;
  if (fromScale === "celsius" && toScale === "fahrenheit") {
    convertedTemperature = (temperature * 9/5) + 32;
  } else if (fromScale === "fahrenheit" && toScale === "celsius") {
    convertedTemperature = (temperature - 32) * 5/9;
  } else if (fromScale === "celsius" && toScale === "kelvin") {
    convertedTemperature = temperature + 273.15;
  } else if (fromScale === "kelvin" && toScale === "celsius") {
    convertedTemperature = temperature - 273.15;
  }
  // Add more conversion cases for other scales

  resultParagraph.textContent = `${temperature.toFixed(2)}°${fromScale.toUpperCase()} is equal to ${convertedTemperature.toFixed(2)}°${toScale.toUpperCase()}.`;
  resultParagraph.style.color = "#00aa00";
});
