/// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const {questions} = require('statuses')

// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
        {
            type: 'input',
            questions: "What's the project title?",
            name:'title',
            validate: (value)=>{if(value){return true}else {return 'I need a value to continue'}}

        },
        {
            type: 'input',
            questions: "What would be the descriptions of the project?",
            name:'Descriptions',
            validate: (value)=>{if(value){return true}else {return 'I need a value to continue'}}

        },
        {
            type: 'input',
            questions: "What would be the installation process?",
            name:'Installation',
            validate: (value)=>{if(value){return true}else {return 'I need a value to continue'}}

        },
        {
            type: 'input',
            questions: "What's the usage informations?",
            name:'Usage',
            validate: (value)=>{if(value){return true}else {return 'I need a value to continue'}}

        },
        {
            type: 'input',
            questions: "What's the contribution guidelines?",
            name:'Contributing',
            validate: (value)=>{if(value){return true}else {return 'I need a value to continue'}}

        },
        {
            type: 'input',
            questions: "What's the test procedures?",
            name:'Tests',
            validate: (value)=>{if(value){return true}else {return 'I need a value to continue'}}

        },
        
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });