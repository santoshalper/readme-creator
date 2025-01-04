// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message:'What is the title of your project?',
    },
    {
        type:'input',
        name:'description',
        message:'What is a description of the project?',
    },
    {
        type: 'input',
        name: 'install',
        message:'How does one install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message:'How does one use your project?',
    },
    {
        type: 'input',
        name: 'contribute',
        message:'How does one contribute to your project?',
    },
    {
        type: 'input',
        name: 'test',
        message:'How does one test your project?',
    },
    {
        type: 'list',
        name: 'license',
        message:'What license does your project use?',
        choices: ['MIT','ISC','Apache','GNU'],
    },
    {
        type: 'input',
        name: 'github',
        message:'What is your GitHub user name?',
    },
    {
        type: 'input',
        name: 'email',
        message:'What is the your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err)=> {
        if(err){
            console.error(err);
        }
    })    
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const fileName = 'README.md'
            const fileData = generateMarkdown(data);
            writeToFile(fileName,fileData); 
        });
}

// Function call to initialize app
init();
