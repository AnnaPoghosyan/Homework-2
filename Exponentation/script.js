let num = +prompt("Enter the number");                  //Exponentation
let exponent = +prompt("Enter the exponent");  
function exponentation (num, exponent) {
      if(exponent === 0) {
          return 1;
      } else {
         return num**exponent;
      }
}
document.write(exponentation(num, exponent))