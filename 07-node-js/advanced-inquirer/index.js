const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');

// Define the questions with bright magenta color for each message
const questions = [
  {
    type: 'input',
    name: 'name',
    message: colors.brightMagenta('What is your name?'),
  },
  {
    type: 'checkbox',
    name: 'languages',
    message: colors.brightMagenta('What languages do you know?'),
    choices: ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'],
  },
  {
    type: 'list',
    name: 'communication',
    message: colors.brightMagenta('What is your preferred method of communication?'),
    choices: ['Email', 'Phone', 'Text', 'In-person'],
  }
];

// Prompt the user and handle responses
inquirer.prompt(questions).then((answers) => {
  // Prepare data for writing to file
  const responseData = `
  Name: ${answers.name}
  Languages: ${answers.languages.join(', ')}
  Preferred Communication: ${answers.communication}
  `;

  // Write responses to a file
  fs.writeFile('responses.txt', responseData, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Responses have been saved to responses.txt');
    }
  });
}).catch((error) => {
  console.error('Error:', error);
});