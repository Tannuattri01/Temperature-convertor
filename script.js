function convertTemp() {
  const temp = Number(document.getElementById("temp").value); 
  const unit = document.getElementById("unit").value;
  let resultText = "";

  if (temp !== temp) { 
      resultText = "Please enter a valid number.";
  } else {
      
      if (unit === "celsius") {
          resultText = `
              In Fahrenheit: ${(temp * 9 / 5 + 32).toFixed(2)}°F <br>
              In Kelvin: ${(temp + 273.15).toFixed(2)}K
          `;
      } else if (unit === "fahrenheit") {
          resultText = `
              In Celsius: ${((temp - 32) * 5 / 9).toFixed(2)}°C <br>
              In Kelvin: ${(((temp - 32) * 5 / 9) + 273.15).toFixed(2)}K
          `;
      } else if (unit === "kelvin") {
          resultText = `
              In Celsius: ${(temp - 273.15).toFixed(2)}°C <br>
              In Fahrenheit: ${(((temp - 273.15) * 9 / 5) + 32).toFixed(2)}°F
          `;
      }
  }


  document.getElementById("result").innerHTML = resultText;
}
