/**
 * Decode the given array back into an object structure, based on the provided
 * encoding.
 * @private
 * @param {Array} object - the array to decode
 * @param {Array} encoding -
 * a list of properties determining the order in which the object's values
 * were encoded in the array, e.g., ["value", "year", "rank"]
 * @return {Object}
 */
export const decodeObject = (array, encoding) => {
  const object = {};

  // Add object props from array
  array.forEach((element, index) => {
    const property = encoding[index];
    object[property] = element;
  });

  return object;
};
