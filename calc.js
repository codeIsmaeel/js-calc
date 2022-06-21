var num1 = window.prompt("Enter a number");
var operand = window.prompt("Enter an operand: +, -, *, /, %")
var num2 = window.prompt("Enter a second number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (operand == "+") { 
    window.alert(num1 + num2)
}

if (operand == "-") { 
    window.alert(num1 - num2)
}

if (operand == "*") { 
    window.alert(num1 * num2)
}

if (operand == "/") { 
    window.alert(num1 / num2)
}

if (operand == "%") { 
    window.alert(num1 % num2)
}