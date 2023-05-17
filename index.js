// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create a function to write README file
class User {
    constructor({ title, description, confirm }) {
        if (confirm === 'y'){
            this.title = title;
            this.description = description;
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
            description: this.description
        }
        const README = generateMarkdown(data);
        fs.writeFileSync('./README.md', README);
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
