// TODO: What are we importing?
// Importing the 'fs' module from Node.js, which allows us to interact with the file system.
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
fs.appendFile(
  // First argument: the file path ('log.txt') where the data will be appended. If the file doesn't exist, it will be created.
  'log.txt',

  // Second argument: the data to append to the file. We get it from the third command-line argument (`process.argv[2]`) and add a newline (`\n`) to start a new line in the log.
  `${process.argv[2]}\n`,

  // Third argument: a callback function that handles the result of the append operation. It receives an error object (if there is one) or `null` if successful.
  (err) =>
    // TODO: Describe how this ternary operator works
    // Ternary operator checks if 'err' exists (i.e., if there's an error).
    // If 'err' is true (i.e., an error occurred), it logs the error with `console.error()`.
    // Otherwise, it logs 'Commit logged!' to indicate that the operation was successful.
    err ? console.error(err) : console.log('Commit logged!')
);