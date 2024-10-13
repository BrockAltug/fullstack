const inquirer = require('inquirer');
const fs = require('fs');

// Define the questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'location',
    message: 'Where are you located?',
  },
  {
    type: 'input',
    name: 'bio',
    message: 'Tell me a little about yourself (bio):',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'What is your LinkedIn URL?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub URL?',
  }
];

// Prompt user for input
inquirer.prompt(questions).then((userInput) => {
  // Create HTML content using template literals
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${userInput.name}'s Portfolio</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 20px;
        background-color: #f4f4f9;
      }
      .container {
        max-width: 800px;
        margin: 0 auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      h1 {
        color: #333;
      }
      p {
        line-height: 1.6;
      }
      a {
        color: #1e90ff;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>${userInput.name}</h1>
      <p><strong>Location:</strong> ${userInput.location}</p>
      <p>${userInputbio}</p>
      <p><strong>LinkedIn:</strong> <a href="${userInput.linkedin}" target="_blank">${answers.linkedin}</a></p>
      <p><strong>GitHub:</strong> <a href="${userInput.github}" target="_blank">${answers.github}</a></p>
    </div>
  </body>
  </html>
  `;

  // Write the HTML content to a file
  fs.writeFile('portfolio.html', htmlContent, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('Portfolio page generated successfully!');
    }
  });
}).catch((error) => {
  console.error('Error:', error);
});