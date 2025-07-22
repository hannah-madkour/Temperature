// function to convert temp. based on selected unit
function convertTemperature() {
  // get user imput value and convert it to a float
  const temperature = parseFloat(document.getElementById("temperature").value);
  // get the selected unit from dropdown
  const unit = document.getElementById("unit").value;
  // get the element to display the result
  const resultDiv = document.getElementById("result");
  // check if the temperature is valid number
  if (isNaN(temperature)) {
    resultDiv.textContent = "Please enter a valid temperature. ";
    // exit function if input is invalid
    return;
  }
  //variable to score the converted temperature
  let convertedTemp;
  // variable to score the converted unit
  let convertedUnit;
  // check which unit is selected and perform conversion
  if (unit == "celsius") {
    // convert celsius to fahrenheit
    convertedTemp = (temperature * 9) / 5 + 32;
    convertedUnit = "fahrenheit";
  } else {
    // convert fahrenheit to celsius
    convertedTemp = ((temperature - 32) * 5) / 9;
    convertedUnit = "celsius";
  }
  // display the converted temp  with 2 decimals
  resultDiv.textContent = `Converted Temperature : ${convertedTemp.toFixed(
    2
  )}° ${convertedUnit} `;
}
