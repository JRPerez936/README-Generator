// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
    },
    {
        type:'input',
        name:'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
    },
    {
        type:'input',
        name:'installation',
        message: 'Provide a description of the project (Required)',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('You need to enter instructions!');
            return false;
          }
        }
    },
    {
        type:'input',
        name:'usage',
        message: 'Provide a description of how the project is used (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Describe how the project is used!');
            return false;
          }
        }
    },
    {
        type:'input',
        name:'contributions',
        message: 'How can users contribute to the project (Required)',
        validate: contributionInput => {
          if (contributionInput) {
            return true;
          } else {
            console.log('Describe how users can contribute!');
            return false;
          }
        }
    },
    {
        type:'input',
        name:'test',
        message: 'How can users test the project (Required)',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Describe how users can test the project!');
            return false;
          }
        }
    },
    {
        type:'list',
        name:'license',
        message: 'Choose a License for the project (Required)',
        choices: ['Apache-2.0', 'ISC', 'GPL-3.0', 'MIT', 'No License'],
        validate: licenseList => {
          if (licenseList) {
            return true;
          } else {
            console.log('Please choose a license or no license if there are none in the project!');
            return false;
          }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('.dist/README.md',(fileName, data), err =>{
        if (err){
            console.log(err);
            return
        }
        console.log ('Readme Generated!');
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((data)=>{
        writeToFile('README.md', generateMarkdown(data))
    })
}

// Function call to initialize app
init();
