'use strict';

const { capitalize } = require('../../../utils/capitalize');
const { fromCableToCamelCase } = require('../../../utils/from-cable-to-camel-case');

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the component name?',
      },
    ];

    return inquirer
      .prompt(questions)
      .then((component) => {
        const componentName = component.name;
        const capitalizedComponentName = capitalize(
          fromCableToCamelCase(componentName)
        );

        const kebabCaseRegex = /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/g;
        if (!kebabCaseRegex.test(componentName)) {
          console.error(
            '\x1b[31m',
            `Component name "${componentName}" must be in kebab-case!`
          );
          process.exit(1);
        }

        const absPath = `src/pages`;

        const templateData = {
          absPath,
          componentName,
          capitalizedComponentName,
        };

        return templateData;
      });
  }
};
