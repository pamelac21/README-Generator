// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
    message: 'What is the title of your project?',
    name: 'Title'},
    {type: 'input',
    message: 'What was your motivation?',
    name: 'Description'},
    {type: 'input',
    message: 'Why did you build this project?',
    name: 'Description'},
    {type: 'input',
    message: 'What problem does it solve?',
    name: 'Description'},
    {type: 'input',
    message: 'What did you learn?',
    name: 'Description'},
    {type: 'input',
    message: 'What makes your project stand out?',
    name: 'Description'},
    {type: 'input',
    message: 'What is your email address?',
    name: 'Questions'},
    {type: 'input',
    message: 'What is your GitHub username?',
    name: 'Questions'},
    {type: 'input',
    message: 'How should someone reach you with additional questions?',
    name: 'Questions'},
    {type: 'input',
    message: '',
    name: 'Installation'},
    {type: 'input',
    message: '',
    name: 'Usage'},
    {type: 'input',
    message: '',
    name: 'Contributing'},
    {type: 'input',
    message: '',
    name: 'Tests'},
    {type: 'input',
    message: '',
    name: 'License'},


];
inquirer
  .prompt([
    {
      type: 'checkbox',
      name: 'License',
      message: 'Which badges?',
      choices: [
        '', '', '', '',
      ],
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.License)
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
