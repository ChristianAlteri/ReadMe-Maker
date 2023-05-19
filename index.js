// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const generateMarkdown = require('./utils/generateMarkdown');
// const formatParagraphToList = require('./utils/generateMarkdown/formatParagraphToList');
const {formatParagraphToList , generateMarkdown, renderLicense} = require('./utils/generateMarkdown.js');


// TODO: Create a function to write README file
class User {
    constructor({ title, description, paragraph, name, projectLink, license, colors, confirm }) {
        if (confirm === 'y'){
            this.title = title;
            this.description = description;
            this.paragraph = paragraph;
            this.name = name;
            this.projectLink = projectLink;
            this.license = license;
            this.colors = colors;
            // formatParagraphToList(this.paragraph) = paragraph;
            this.confirm = confirm;
            
        }
    }  
    verify() {
        if (!this.confirm) {
            console.log("Let's try that again");
            return false;
        } else {
            return true;
        }
    }
    readMeMaker(){
        const data = {
            title: this.title,
            description: this.description,
            paragraph: formatParagraphToList(this.paragraph),
            name: this.name,
            projectLink: this.projectLink,
            license: this.license,
            colors: this.colors,
            
        }
        
        const README = generateMarkdown(data);
        fs.writeFileSync('./README.md', README);
        const LICENSE_TEXT = renderLicense(data);
        fs.writeFileSync('./LICENSE', LICENSE_TEXT);
    }
}    

// TODO: Create an array of questions for user input
// TODO: Create a function to initialize app
function start() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is your repo title?',
          name: 'title',
        },
        {
            type: 'input',
            message: 'Describe your repos purpose?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Describe how to use the script. (use full stops to line break and add a number to the list)',
            name: 'paragraph',
        },
        {
            type: 'input',
            message: 'Type your full name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Paste your projects published GitHub link',
            name: 'projectLink',
        },
        {
          type: 'checkbox',
          message: 'Select your License',
          name: 'license',
          choices: [
            { name: 'MIT License', value: 'MIT' },
            { name: 'Apache License', value: 'Apache' },
            { name: 'Creative Commons Attribution International License', value: 'Creative Commons' },
            { name: 'Mozilla Public License', value: 'Mozilla' },
            { name: 'Boost Software License', value: 'Boost' }
          ]
        },
        {
          type: 'checkbox',
          message: 'Select the color of your badge:',
          name: 'colors',
          choices: [
            { name: 'Red', value: 'red' },
            { name: 'Green', value: 'green' },
            { name: 'Blue', value: 'blue' }
          ]
        },
        {
          type: 'input',
          message: 'Press y to confirm and continue:',
          name: 'confirm',
        },
      ])
      .then((response) => {
        const user = new User(response);
  
        if (!user.verify()) {
          start();
        } else {
          user.readMeMaker();
        }
      });
  }

// Function call to initialize app
start();
