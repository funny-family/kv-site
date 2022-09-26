/**
 * @param {string} prefix
 * @param {string[]} extensions
 * @returns {string[]}
 */
const createPageExtensionsWithPrefix = (prefix, extensions) =>
  extensions.map((extension) => `${prefix}.${extension}`);

exports.createPageExtensionsWithPrefix = createPageExtensionsWithPrefix;
