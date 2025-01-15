// // 'fs' is a built-in Node.js module that helps us read from and write to files
// const fs = require('fs');

// const userInput1 = process.argv[2];
// const userInput2 = process.argv[3];

// // This function, 'addFunc', takes two inputs, adds them, and logs the result or an error
// const addFunc = (x, y) => {
//   // Check if both inputs are provided; if not, set an error message.
//   // If both are provided, perform the addition and create a success message.
//   const message = (y === undefined) ? 'Error: You need to provide two numbers.' : `The sum of ${parseInt(x)} and ${parseInt(y)} is ${parseInt(x) + parseInt(y)}.`;

//   // Write the message to 'log.txt'
//   fs.writeFile('log.txt', message + '\n', { flag: 'a' }, (err) => {
//     err ? console.error('Error updating: ', err) : console.log('Log updated successfully!');
//   });
// };

// // Call the 'addFunc' function, using the command-line arguments
// // These arguments are provided when the program is run from the terminal
// addFunc(userInput1, userInput2);




// 'fs' is a built-in Node.js module that helps us read from and write to files
const fs = require('fs');

// This function, 'writeToLog', will take some data and write it to a file called 'log.txt'
const writeToLog = (data) => {
  // We use 'fs.writeFile' to write the data to 'log.txt'. 
  // The flag 'a' means that new data will be added to the end of the file, without deleting what's already in it.
  fs.writeFile('log.txt', data, (err) => {
    // If there's an error, log it to the console.
    if (err) {
      console.error('Error writing to log:', err);
    } else {
      // If no error, log a message saying the log was updated successfully.
      console.log('Log updated successfully!');
    }
  });
};

// This function, 'addFunc', takes two inputs, adds them, and logs the result or an error
const addFunc = (x, y) => {
  let message;

  // This checks if only one input was provided (or if the second one is missing)
  if (y === undefined) {
    // Set the message to explain that the wrong number of inputs was given
    message = 'Error: You need to provide two numbers.';
    // Write this error message to the log file
    writeToLog(message);
  } else {
    // Convert both inputs to numbers
    let num1 = parseInt(x);
    let num2 = parseInt(y);

    // Add the two numbers and create a message with the result
    const result = num1 + num2;
    message = `The sum of ${num1} and ${num2} is ${result}.`;
    // Write this message to the log file
    writeToLog(message);
  }
};

// Call the 'addFunc' function, using the command-line arguments
// These arguments are provided when the program is run from the terminal
addFunc(process.argv[2], process.argv[3]);