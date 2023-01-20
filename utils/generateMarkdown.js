function generateMarkdown(data) {
  return `# ${data.Title}
  https://github.com/${data.Username}/${data.Title}
# Description
${data.Descriptions}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
# Installation
The following necessary dependencies must be installed to run the application properly: ${data.Installation}
# Usage
In order to use this app, ${data.Usage}

# Contributing
​Contributors: ${data.Contributing}
# Tests
The following is needed to run the test: ${data.Tests}
# License
This project is licensed under the ${data.License} license. 

# Questions
If you have any questions about the repo, open an issue or contact ${data.Username} directly at : ${data.Email}.
`;
}

module.exports = generateMarkdown;
