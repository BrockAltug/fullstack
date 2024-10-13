console.log(process.argv[2]);
console.log(process.argv[3]);

// checks if they are equal
//parseInt converts a string to an integer
if (parseInt(process.argv[2]) === parseInt(process.argv[3])) {
  console.log('They are equal');
} else {
  console.log('They are not equal');
}


// Assign command-line arguments to variables
//const arg1 = process.argv[2]; // First argument
//const arg2 = process.argv[3]; // Second argument

// Compare the two arguments and log the result
//if (arg1 === arg2) {
//  console.log(They are equal);
//  console.log(true);
//} else {
//  console.log(They are not equal);
//  console.log(false);
//}

//another way to write it
//console.log(process.argv[2] === process.argv[3]);