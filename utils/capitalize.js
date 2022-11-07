'use strict';

/**
 * @param {string} string
 * @returns {string}
 */
const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

exports.capitalize = capitalize;
