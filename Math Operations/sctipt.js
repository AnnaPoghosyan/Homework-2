let num1 = +prompt("Enter the number");      
let num2 = +prompt("Enter the number");
let op = prompt("Enter the operator");

function mathoperations (num1, num2, op) {
    if (op === "+") {
        return num1+num2;
    } else if (op === "-") {
        return num1-num2;
    } else if (op === "*") {
        return num1*num2;
    } else if (op === "/") {
        return num1/num2;
    }
}

document.write (mathoperations(num1,num2,op));



