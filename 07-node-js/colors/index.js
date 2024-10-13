const colors = require('colors');

// Capture command-line arguments
const name = process.argv[2];
const profit = parseFloat(process.argv[3]);

// Highlighting logic based on profit
if (profit > 0) {
  console.log(`My name is ${name.bgYellow.black} and I made ${profit.toString().bgGreen.black} dollars this quarter.`);
} else {
  console.log(`My name is ${name.bgYellow.black} and I made ${profit.toString().bgRed.black} dollars this quarter.`);
}