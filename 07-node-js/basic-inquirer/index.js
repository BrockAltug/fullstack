const inquirer = require('inquirer');
const colors = require('colors');

// Prompt user for text and color choice
inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'What text would you like to log?',
  },
  {
    type: 'list',
    name: 'color',
    message: 'What color would you like to use?',
    choices: ['red', 'blue', 'green', 'yellow', 'cyan', 'magenta'],
  }
]).then(answers => {
  // Log the text in the selected color
  switch (answers.color) {
    case 'red':
      console.log(colors.red(answers.text));
      break;
    case 'blue':
      console.log(colors.blue(answers.text));
      break;
    case 'green':
      console.log(colors.green(answers.text));
      break;
    case 'yellow':
      console.log(colors.yellow(answers.text));
      break;
    case 'cyan':
      console.log(colors.cyan(answers.text));
      break;
    case 'magenta':
      console.log(colors.magenta(answers.text));
      break;
    default:
      console.log(answers.text);
  }
}).catch(error => {
  console.error('Error:', error);
});