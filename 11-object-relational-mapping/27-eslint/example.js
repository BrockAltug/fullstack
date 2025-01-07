// Prompt the user for the first number and parse it as an integer
const num1 = parseInt(prompt("Give me a number!"), 10);

// Prompt the user for the second number and parse it as an integer
const num2 = parseInt(prompt("Give me another number!"), 10);

// Declare a variable to store the result of the operation
let result;

// Prompt the user for the operation and convert the input to uppercase
const operation = prompt("What would you like to do? (add, subtract, multiply, divide)").toUpperCase();

// Check the user's chosen operation and perform the corresponding calculation
if (operation === "ADD") { // Changed `==` to `===` for strict equality
  result = num1 + num2; // Removed redeclaration of `result`
  alert(`The sum of ${num1} and ${num2} is ${result}.`); // Replaced string concatenation with template literals
} else if (operation === "SUBTRACT") {
  result = num1 - num2;
  alert(`The difference between ${num1} and ${num2} is ${result}.`); // Used template literals
} else if (operation === "MULTIPLY") {
  result = num1 * num2;
  alert(`The product of ${num1} and ${num2} is ${result}.`); // Used template literals
} else if (operation === "DIVIDE") {
  if (num2 !== 0) { // Added check to prevent division by zero
    result = num1 / num2;
    alert(`The quotient of ${num1} and ${num2} is ${result}.`); // Used template literals
  } else {
    alert("Division by zero is not allowed!"); // Added division by zero error message
  }
} else {
  alert("Not a valid option!"); // Handle invalid operation input
}