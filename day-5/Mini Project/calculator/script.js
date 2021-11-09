let operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): '); 
let number1 = parseFloat(prompt ('Enter the first number: '));
let number2 = parseFloat(prompt ('Enter the second number: '));

let result; 


if (operator == '+') { 
    result = number1 + number2;
}
else if (operator == '-') { 
    result = number1 - number2;
}
else if (operator == '*') { 
    result = number1 * number2;
}
else {
    result = number1 / number2; 
}

console.log(" Result is " + result);