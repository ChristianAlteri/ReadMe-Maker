// hardcode licenseText to three choices. Use conditional to match correct license to users choice
function renderLicense(license) {
  let licenseText = "";

  if (license === "MIT") {
    licenseText = `MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

- The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  } else if (license === "Apache") {
    licenseText = `Apache License 2.0

Version 2.0, January 2004

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1. Definitions.
...`;
  } else if (license === "Creative Commons") {
    licenseText = `Creative Commons Attribution 4.0 International License

By exercising the Licensed Rights (defined below), You accept and agree to be bound by the terms and conditions of this Creative Commons Attribution 4.0 International Public License (Public License). To the extent this Public License may be interpreted as, You are granted the Licensed Rights in consideration of Your acceptance of these terms and conditions, and the Licensor grants You such rights in consideration of benefits the Licensor receives from making the Licensed Material available under these terms and conditions.
...`;
  }
  return licenseText;
}

function formatParagraphToList(paragraph) {
  // splits the paragraph into individual sentences
  // sentences becomes an array of sentences
  const sentences = paragraph.split(". ");

  // arrow function using the index of sentences to increment the number for list item
  // generate the numbered list
  const listItems = sentences.map(
    (sentence, index) => `${index + 1}. ${sentence}`
  );

  // join the list items with line breaks to form the final formatted list
  const formattedList = listItems.join("\n");

  return formattedList;
}
// use template literal to add all the data to the README format.
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

[![License](https://img.shields.io/badge/LICENSE-${data.license}-${data.colors})](LICENSE)
`;
}
// export the three functions we will be using
module.exports = {
  generateMarkdown,
  formatParagraphToList,
  renderLicense,
};
