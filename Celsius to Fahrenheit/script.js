let celsius = +prompt("Enter celsius");              
function convertToFarenheit(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
  }
  
  document.write(convertToFarenheit(celsius));