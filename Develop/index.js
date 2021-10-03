// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
//var util = require('util');
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
    message: 'Instructions for installation:',
    name: 'Installation'},
    {type: 'input',
    message: 'Instructions for usage:',
    name: 'Usage'},
    {type: 'input',
    message: 'Instructions for contributing:',
    name: 'Contributing'},
    {type: 'input',
    message: '',
    name: 'Tests'},
    {   type: 'list',
        name: 'License',
        message: 'Choose a license for your project: ',
        choices: [
          'Open', 'Apache', 'MIT',
        ]}
    
    ]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}
//const writeFileAsync = util.promisify(writeToFile);
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        fs.writeFile('README.md', generateMarkdown(data), (err) => {
            if(err){
                console.log(err)
            }else{
                console.log('success')
            }
            }
    )})
        }

// Function call to initialize app
init();
