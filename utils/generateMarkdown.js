// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs = require('fs');

// https://img.shields.io/badge/License-MIT-green




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicense(license) {
  let licenseText = '';

  if (license === 'MIT') {
    licenseText = `MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

- The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  } else if (license === 'Apache') {
    licenseText = `Apache License 2.0

Version 2.0, January 2004

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1. Definitions.

...

[License terms and conditions continue here]

...`;
  } else if (license === 'Creative Commons') {
    licenseText = `Creative Commons Attribution 4.0 International License

By exercising the Licensed Rights (defined below), You accept and agree to be bound by the terms and conditions of this Creative Commons Attribution 4.0 International Public License (Public License). To the extent this Public License may be interpreted as, You are granted the Licensed Rights in consideration of Your acceptance of these terms and conditions, and the Licensor grants You such rights in consideration of benefits the Licensor receives from making the Licensed Material available under these terms and conditions.

...`;
  }
  return licenseText;
  
}


function formatParagraphToList(paragraph) {
  // Split the paragraph into individual sentences
  const sentences = paragraph.split('. ');

  // Generate the numbered list
  const listItems = sentences.map((sentence, index) => `${index + 1}. ${sentence}`);

  // Join the list items with line breaks to form the final formatted list
  const formattedList = listItems.join('\n');

  return formattedList;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

## Description 

${data.description}

## Table of contents:

* Title
* Description
* Installation
* Usage
* Author
* GitHb Link
* License

## Installation:

\`\`\`bash
npm install inquirer@8.2.4
node index.js
\`\`\`


## Usage
\`\`\`
${data.paragraph}
\`\`\`

###

Written by ${data.name}

To learn more about my project, [click here](${data.projectLink}).

####

[![License](https://img.shields.io/badge/LICENSE-${data.license}-<${data.colors}>)](LICENSE)
`;
}

module.exports = {
  generateMarkdown,
  formatParagraphToList,
  renderLicense,
};
// module.exports = formatParagraphToList;
