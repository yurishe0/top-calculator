const calculator = document.querySelector(".calculator");
const screen = document.querySelector(".screen");
const screenContent = document.querySelector(".screen-content");
const buttons = document.querySelectorAll(".button");
const buttonNumbers = document.querySelectorAll(".number");
const buttonOperators = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear")

let previousNumber = "";
let currentNumber = "";

buttonNumbers.forEach(button => button.addEventListener('click', () => {
    previousNumber = currentNumber;
    currentNumber += button.dataset.value;

    screenContent.textContent = currentNumber;

    console.log(previousNumber);
    console.log(currentNumber);
}));

buttonOperators.forEach(button => button.addEventListener('click', () => {
    let operator = button.dataset.value;
    console.log(operator);

    switch(operator) {
        case "clear":
            clearScreen();
            break;
    }
}));

function clearScreen() {
    currentNumber = "";
    previousNumber = "";
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
