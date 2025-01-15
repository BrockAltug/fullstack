// TODO: Import `basicmath.js`
const basicmath = require('./basicmath');

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
// Using `process.argv` to capture command-line arguments
// The first two elements of `process.argv` are `node` and the script name, so we skip them
const operation = process.argv[2];
const numOne = parseFloat(process.argv[3]); // Parse as floating-point numbers for decimal support
const numTwo = parseFloat(process.argv[4]);

// TODO: Create a `switch` statement that accepts an `operation` parameter
// Switch statement to decide which operation to perform based on the `operation` argument
switch (operation) {
  case 'sum':
    // Call the sum function from `basicmath.js`
    console.log(basicmath.sum(numOne, numTwo));
    break;
  case 'difference':
    // Call the difference function from `basicmath.js`
    console.log(basicmath.difference(numOne, numTwo));
    break;
  case 'product':
    // Call the product function from `basicmath.js`
    console.log(basicmath.product(numOne, numTwo));
    break;
  case 'quotient':
    // Call the quotient function from `basicmath.js`
    if (numTwo !== 0) {
      // Ensure no division by zero
      console.log(basicmath.quotient(numOne, numTwo));
    } else {
      console.log('Error: Cannot divide by zero');
    }
    break;
  default:
    // Handle invalid operation input
    console.log('Invalid operation. Please use sum, difference, product, or quotient.');
    break;
}

// After running this, when you use commands like `node index.js sum 3 4` in the terminal,
// it will call the correct function from `basicmath.js` and print the result.