// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
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
## ${data.description}

## Function
${data.paragraph}
1. Launch the Toyota Green Trips web app on your preferred device.
2. On the main interface, locate the input fields for the start location, end location, and Toyota model selection.
3. Enter the starting location of your trip in the designated field. This can be the address, suburb, or city name.
4. Enter the destination location of your trip in the corresponding field. Similar to the start location, you can input the address, suburb, or city name.
5. Choose the Toyota model you plan to use for your journey. The app provides options for three of Toyota's famous models, such as the Camry, Corolla, and Camry Wagon. Select the model that best represents your vehicle.
6. After entering all three parameters, click the "Calculate" button to initiate the emission calculation process.
7. The app will quickly process the data and provide you with the estimated CO2 emissions generated by your trip based on the selected start and end locations and the Toyota model chosen.
8. Review the emissions information displayed on the screen. This may include the amount of CO2 emitted in kilograms or an equivalent metric.
9. Use this valuable information to make informed decisions about your transportation choices. You can compare the emissions between different Toyota models or explore alternative modes of travel to reduce your carbon footprint.
10. Repeat the process for any other trips you would like to calculate using different start and end locations or Toyota models.

By following these steps, users can easily leverage the functionality of the Toyota Green Trips app to calculate and evaluate the CO2 emissions associated with their Australian journeys, contributing to a more sustainable approach to transportation.

###

Written by Mackenzie Lukic and Christian Alteri and Chad Geepeetee

To learn more about my project, [click here](http://www.example.com).

####

MIT License
`;
}

module.exports = {
  generateMarkdown,
   formatParagraphToList
};
// module.exports = formatParagraphToList;
