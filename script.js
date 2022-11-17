const screenContent = document.querySelector(".screen-content");
const buttonNumbers = document.querySelectorAll(".number");
const buttonOperators = document.querySelectorAll(".operator");

let currentNumber = "";
let currentExpression = [];
let lastInput = "";
let previousInput = "";

buttonNumbers.forEach(button => button.addEventListener('click', () => {
    currentNumber += button.dataset.value;
    currentNumberDisplay = button.dataset.value;
    previousInput = lastInput;
    lastInput = button.dataset.value;


    screenContent.textContent += currentNumberDisplay;
}));

buttonOperators.forEach(button => button.addEventListener('click', () => {
    let operator = button.dataset.value;
    let operatorSymbol = "";
    previousInput = lastInput;
    lastInput = button.dataset.value;


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

    // Prevent putting two operators in a row, then push the operator to the screen and to the expression.
    if(previousInput != "add" && previousInput != "substract" && previousInput != "multiply" && previousInput != "divide"){
        screenContent.textContent += ` ${operatorSymbol} `;
        currentExpression.push(currentNumber);
        currentExpression.push(operator);
        currentNumber = "";
    }

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

    for (let i = 0; i <= expression.length; i++) {

        if (i % 2 != 0) {

            i = 1;
            let currentOperator = expression[i];
            let number1 = parseFloat(expression[i - 1]);
            let number2 = parseFloat(expression[i + 1]);


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
            expression.unshift(result.toString());
        }

    }

    screenContent.textContent = currentExpression;

    currentNumber = currentExpression[0];
    currentExpression.shift();
}
