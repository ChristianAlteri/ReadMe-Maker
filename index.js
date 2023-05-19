// import requirements
const fs = require("fs");
const inquirer = require("inquirer");
// import exported modules
const {
  formatParagraphToList,
  generateMarkdown,
  renderLicense,
} = require("./utils/generateMarkdown.js");

// creating a class from the command line prompt answers
class User {
  constructor({
    title,
    description,
    paragraph,
    name,
    projectLink,
    license,
    colors,
    confirm,
  }) {
    if (confirm === "y") {
      this.title = title;
      this.description = description;
      this.paragraph = paragraph;
      this.name = name;
      this.projectLink = projectLink;
      this.license = license;
      this.colors = colors;
      this.confirm = confirm;
    }
  }
  // conditional to confirm
  verify() {
    if (!this.confirm) {
      console.log("Let's try that again");
      return false;
    } else {
      return true;
    }
  }
  // assign class data to variable named data
  readMeMaker() {
    const data = {
      title: this.title,
      description: this.description,
      paragraph: formatParagraphToList(this.paragraph),
      name: this.name,
      projectLink: this.projectLink,
      license: this.license,
      colors: this.colors,
    };
    // execute functions using data variable
    const README = generateMarkdown(data);
    fs.writeFileSync("./output/README.md", README);
    const LICENSE_TEXT = renderLicense(data.license);
    fs.writeFileSync("./output/LICENSE", LICENSE_TEXT);
  }
}
// question prompts using inquirer package from NPM
function start() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your repo title?",
        name: "title",
      },
      {
        type: "input",
        message: "Describe your repos purpose?",
        name: "description",
      },
      {
        type: "input",
        message:
          "Describe how to use the script. (use full stops to line break and add a number to the list)",
        name: "paragraph",
      },
      {
        type: "input",
        message: "Type your full name",
        name: "name",
      },
      {
        type: "input",
        message: "Paste your projects published GitHub link",
        name: "projectLink",
      },
      {
        type: "list",
        message: "Select your License",
        name: "license",
        choices: [
          { name: "MIT License", value: "MIT" },
          { name: "Apache License", value: "Apache" },
          { name: "Creative Commons Attribution International License", value: "Creative Commons", },
        ],
      },
      {
        type: "list",
        message: "Select the color of your badge:",
        name: "colors",
        choices: [
          { name: "Red", value: "red" },
          { name: "Green", value: "green" },
          { name: "Blue", value: "blue" },
        ],
      },
      {
        type: "input",
        message: "Press y to confirm and continue:",
        name: "confirm",
      },
    ])
    .then((response) => {
      // create new instance of User
      const user = new User(response);
      // restart questions if condition is met else add README and LICENSE to output folder
      if (!user.verify()) {
        start();
      } else {
        user.readMeMaker();
      }
    });
}

// Function call to initialize app
start();
