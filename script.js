const calculator = document.querySelector(".calculator");
const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".button");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear")

buttons.forEach(button => button.addEventListener('click', () => {
    console.log(button.dataset.value);
}))
