'use strict';

const generalRules = {
  'string-quotes': 'single',
  'selector-class-pattern': /\w*([\W\w])/, // match any string
  'selector-id-pattern': /\w*([\W\w])/, // match any string
  'max-line-length': [
    80,
    {
      ignore: ['comments'],
    },
  ],
};

const scssRules = {
  //
};

module.exports = {
  extends: [
    // https://github.com/stylelint-scss/stylelint-config-standard-scss
    'stylelint-config-standard-scss',
    'stylelint-config-rational-order',
  ],
  rules: {
    ...generalRules,
    ...scssRules,
  },
};
