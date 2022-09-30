/**
 * @param {string} string
 * @returns {string|null}
 */
const fromCableToCamelCase = (string) => {
  if (string == null) return null;

  const array = string.split('-');
  const capital = array.map((item, index) =>
    index ?
      `${item.charAt(0).toUpperCase()}${item.slice(1).toLowerCase()}` :
      item.toLowerCase(),
  );
  const capitalStringing = capital.join('');

  return capitalStringing;
};

exports.fromCableToCamelCase = fromCableToCamelCase;
