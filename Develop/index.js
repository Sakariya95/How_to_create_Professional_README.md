/// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const utils = require('utils')

const generatorMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        questions: "What's the project title?",
        name:'Title',
    },
    {
        type: 'input',
        questions: "What would be the descriptions of the project?",
        name:'Descriptions',
    },
    {
        type: 'input',
        questions: "What would be the installation process?",
        name:'Installation',
    },
    {
        type: 'input',
        questions: "What's the usage informations?",
        name:'Usage',
    },
    {
        type: 'input',
        questions: "What's the contribution guidelines?",
        name:'Contributing',
    },
    {
        type: 'input',
        questions: "What's the test procedures?",
        name:'Tests',
    },
    {
        type: 'list',
        questions: "What license did you use?",
        name:'License',
        choices:['The MIT License', 'Apache License', 'GNU License', 'The GPL License', 'N/A'],
    },
    {
        type: 'input',
        questions: "GitHub username:",
        name:'Username',
    },
    {
        type: 'input',
        questions: "Email address?",
        name:'Email',
    },
            
];
//the function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })

}





// the function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generatorMarkdown(data));
            console.log(data)

        })

}

// the function call to initialize program
init();
