// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let retString = '';
  switch(license){
    case 'MIT':
      retString = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'ISC':
      retString = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    case 'Apache':
      retString = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU':
      retString = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    default:
      retString = '';
  }
  return retString;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let retString = '';
  switch(license){
    case 'MIT':
      retString = '<a href="https://opensource.org/licenses/MIT">MIT</a>';
      break;
    case 'ISC':
      retString = '<a href="https://opensource.org/licenses/ISC">ISC</a>';
      break;
    case 'Apache':
      retString = '<a href="https://opensource.org/licenses/Apache-2.0">Apache</a>';
      break;
    case 'GNU':
      retString = '<a href="https://www.gnu.org/licenses/gpl-3.0">GPL v3</a>';
      break;
    default:
      retString = '';
  }
  return retString;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let retString = '';
  if (license != ''){
    retString = 'licensed under the ' + renderLicenseLink(license)+' license.';
  }
  return retString;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const license = renderLicenseSection(data.license);
  return `# ${data.title}

  ${badge}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  <h2 id="installation">Installation</h2>
  ${data.install}

  <h2 id="usage">Usage</h2>
  ${data.usage}

  <h2 id="contribution">Contribution</h2>
  ${data.contribute}

  <h2 id="tests">Tests</h2>
  ${data.test}

  <h2 id="license">License</h2>
  ${license}

  <h2 id="questions">Questions</h2>
  
  If you have questions you can send a message to 
  the Github account: ${data.github}
  or 
  email: ${data.email}

`;
}

export default generateMarkdown;
