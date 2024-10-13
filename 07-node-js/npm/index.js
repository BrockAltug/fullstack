const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      message: 'Press ENTER to continue...',
      name: 'enterKey'
    }
  ]);
