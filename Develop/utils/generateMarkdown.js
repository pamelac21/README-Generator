// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license = 'Mozilla'){
    return (`(https://opensource.org/licenses/MPL-2.0)`)
} else if (license = 'Apache') {
  return (`(https://opensource.org/licenses/Apache-2.0)`)
} else if (license = 'MIT') {
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
  return `# ${data.title}

        ![${data.license}](https://img.shields.io/badge/license-${data.license}-blueviolet)

        ## Table of Contents
        * [Description](#description)
        * [Installation](#installation)
        * [Usage](#usage)
        * [License](#license)
        * [Contributing](#contributing)
        * [Tests](#tests)
        * [Questions](#questions)

        ## Description
        ${data.motivation}
        ${data.build}
        ${data.solve}
        ${data.challenges}
        ${data.special}

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
        GitHub: ${data.github}
        email: ${data.email}
        ${data.questions}
        `;
}

module.exports = generateMarkdown;
