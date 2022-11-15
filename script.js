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

    switch(operator) {
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

    if(currentExpression.length >= 2) {
        calculate(currentExpression);
        currentExpression = [];
        console.log(currentExpression);
    }
    currentExpression.push(operator);

    switch(operator) {
        case "clear":
            clearScreen();
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
    screenContent.textContent = num1 + num2;
}

function substract(num1, num2) {
    screenContent.textContent = num1 - num2;
}

function multiply(num1, num2) {
    screenContent.textContent = num1 * num2;
}

function divide(num1, num2) {
    screenContent.textContent = num1 / num2;
}

function calculate(expression) {
    console.log(expression);
    const num1 = parseInt(expression[0]);
    const operator = expression[1];
    const num2 = parseInt(expression[2]);

    console.log(num1, operator, num2);

    switch(operator) {
        case "add":
            add(num1, num2);
            currentExpression = [];
            currentNumber = [];
            break;
        case "substract":
            substract(num1, num2);
            currentExpression = [];
            currentNumber = [];
            break;
        case "multiply":
            multiply(num1, num2);
            currentExpression = [];
            currentNumber = [];
            break;
        case "divide":
            divide(num1, num2);
            currentExpression = [];
            currentNumber = [];
            break;
    }
}
