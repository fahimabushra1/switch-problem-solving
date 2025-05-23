// 5. Simple Calculator
let firstNumber = 5; 
let lastNumber = 4 ; 
let calculatingOperator = "*";
switch (calculatingOperator) {
    case "+":
        console.log(firstNumber + lastNumber)
        break;
    case "-":
        console.log(firstNumber - lastNumber)
        break;
    case "*":
        console.log(firstNumber * lastNumber)
        break;
    case "/":
        console.log(firstNumber / lastNumber)
        break;

    default:
        console.log("Invalid operator")
        break;
}