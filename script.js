const screenContent = document.querySelector(".screen-content");
const buttonNumbers = document.querySelectorAll(".number");
const buttonOperators = document.querySelectorAll(".operator");

let currentNumber = "";
let currentExpression = [];

// Last & previous input are used to prevent putting two operators consecutively.
let lastInput = "";
let previousInput = "";
let currentNumberDisplay = "";

// Listen for clicks on each number button [0 -> 9].
buttonNumbers.forEach((button) =>
  button.addEventListener("click", () => {
    currentNumber += button.dataset.value;
    currentNumberDisplay = button.dataset.value;

    previousInput = lastInput;
    lastInput = button.dataset.value;

    screenContent.textContent += currentNumberDisplay;
  })
);

buttonOperators.forEach((button) =>
  button.addEventListener("click", () => {
    let operator = button.dataset.value;
    let operatorSymbol = "";

    previousInput = lastInput;
    lastInput = button.dataset.value;

    // Asign a proper screen display value to each operator on click.
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
    if (
      previousInput != "add" &&
      previousInput != "substract" &&
      previousInput != "multiply" &&
      previousInput != "divide"
    ) {
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
  })
);

// Completely wipes all the existing data.
function clearScreen() {
  currentNumber = "";
  currentExpression = [];
  screenContent.textContent = "";
}

// Calculating functions.
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

// Main function that calculates the given expression.

function calculate(expression) {
  expression.pop(); // This pops the "equals" out from the expression array.

  for (let i = 0; i <= expression.length; i++) {
    if (i % 2 != 0) {
      // Look for operators. Operators are always on odd array places.

      i = 1; // No clue why, but it breaks without this.

      // Take the operator and the number to the left and right to it.
      let currentOperator = expression[i];
      let number1 = parseFloat(expression[i - 1]);
      let number2 = parseFloat(expression[i + 1]);

      let result = 0;

      // Check the given operator and use an adequate function.
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

      expression.splice(i - 1, 3); // Remove the calculated elements out from the array.

      result = +result.toFixed(4); // Round to 4 decimal points.

      expression.unshift(result.toString()); // Put the calculated result back to the array.
    }
  }

  screenContent.textContent = currentExpression; // After evaluating the entire array, display the result on the user's screen.

  currentNumber = currentExpression[0]; // Asign the result as a first element for the next calculation.
  currentExpression.shift(); // No clue why, but the thing above breaks without this.
}
