let farenheit = +prompt("Enter farenheit");               
function convertToCelsius(farenheit) {
    let celsius = (farenheit - 32)*5/9;
    return celsius;
  }
  
  document.write(convertToCelsius(farenheit));