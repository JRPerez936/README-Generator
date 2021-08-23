// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'No License'){
    return '';
  }
  return `[![Generic badge](https://img.shields.io/badge/License-${license.split("-").join("")}-blue.svg)](${renderLicenseLink(license)})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'No License'){
    return '';
  }
  return `https://choosealicense.com/licenses/${license.toLowerCase()}/`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'No License'){
    return '';
  }
  else if(license === 'Apache-2.0'){
    return `https://choosealicense.com/licenses/${license.toLowerCase()}/`;
  }
  else if(license === 'ISC'){
    return `https://choosealicense.com/licenses/${license.toLowerCase()}/`;
  }
  else if(license === 'GPL-3.0'){
    return `https://choosealicense.com/licenses/${license.toLowerCase()}/`;
  }
  else if(license === 'MIT'){
    return `https://choosealicense.com/licenses/${license.toLowerCase()}/`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table Of Contents
  * [Installation]
  * [Usage]
  * [License]
  * [Contributing]
  * [Tests]
  * [Questions]
  

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}
  Read about the license: ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  ${data.question}
  
`;
}

module.exports = generateMarkdown;
