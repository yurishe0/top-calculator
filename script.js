const calculator = document.querySelector(".calculator");
const screen = document.querySelector(".screen");
const screenContent = document.querySelector(".screen-content");
const buttons = document.querySelectorAll(".button");
const buttonNumbers = document.querySelectorAll(".number");
const buttonOperators = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear")

let currentNumber = "";
let currentExpression = [];

buttonNumbers.forEach(button => button.addEventListener('click', () => {
    currentNumber += button.dataset.value;
    currentNumberDisplay = button.dataset.value;

    screenContent.textContent += currentNumberDisplay;
}));

buttonOperators.forEach(button => button.addEventListener('click', () => {
    let operator = button.dataset.value;
    let operatorSymbol = "";

    switch (operator) {
        case "add":
            operatorSymbol = "+";
            break;
        case "substract":
            operatorSymbol = "-";
            break;
        case "multiply":
            operatorSymbol = "x";
            break;
        case "divide":
            operatorSymbol = "/";
            break;
    }

    screenContent.textContent += ` ${operatorSymbol} `;
    currentExpression.push(currentNumber);
    currentNumber = "";


    currentExpression.push(operator);

    switch (operator) {
        case "clear":
            clearScreen();
            break;
        case "equals":
            calculate(currentExpression);
            break;
    }

}));

function clearScreen() {
    currentNumber = "";
    previousNumber = "";
    currentExpression = [];
    screenContent.textContent = "";
}

function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculate(expression) {
    expression.pop();

    console.log(expression);

    for (let i = 0; i <= expression.length; i++) {

        if (i % 2 != 0) {

            i = 1;
            let currentOperator = expression[i];
            let number1 = parseFloat(expression[i - 1]);
            let number2 = parseFloat(expression[i + 1]);

            console.log(number1, currentOperator, number2);
            let result = 0;

            switch (currentOperator) {
                case "add":
                    result = add(number1, number2);
                    break;
                case "substract":
                    result = substract(number1, number2);
                    break;
                case "multiply":
                    result = multiply(number1, number2);
                    break;
                case "divide":
                    result = divide(number1, number2);
                    break;
            }

            expression.splice(i - 1, 3);

            result = +result.toFixed(4);
            result = result.toString();
            expression.unshift(result);
        }

    }

    screenContent.textContent = currentExpression;

    currentNumber = currentExpression[0];
    currentExpression.shift();
}
