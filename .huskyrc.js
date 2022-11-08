'use strict';

module.exports = {
  hooks: {
    'pre-commit': 'yarn next:lint',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
