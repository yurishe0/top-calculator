const calculator = document.querySelector(".calculator");
const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".button");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear")

buttons.forEach(button => button.addEventListener('click', () => {
    console.log(button.dataset.value);
}))

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
