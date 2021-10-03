// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'ODbl'){
    return (`[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`)
} else if (license === 'Apache') {
  return (`[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`)
} else if (license === 'MIT') {
  return(`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`)
  
}else{
  return ('')
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'ODbl'){
    return (`(https://opendatacommons.org/licenses/odbl/)`)
} else if (license === 'Apache') {
  return (`(https://opensource.org/licenses/Apache-2.0)`)
} else if (license === 'MIT') {
  return(`(https://opensource.org/licenses/MIT)`)
  
}else{
  return ('')
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = renderLicenseBadge()
  const licenseLink = renderLicenseLink()
  return `
    # ${data.title}
    ${license}
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    ## Description
    ${data.description}
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## License
    ${licenseLink}
    ## Contributing
    ${data.contributing}
    ## Tests
    ${data.tests}
    ## Questions
    ${data.questions}
`;
}

module.exports = generateMarkdown;
