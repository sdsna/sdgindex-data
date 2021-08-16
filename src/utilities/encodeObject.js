import get from "lodash.get";

/**
 * Convert the given object into array, which requires less space and is faster
 * to load. The object properties are converted into an array according to the
 * encoding. The encoding should be an array of properties.
 * @private
 * @param {Object} object - the object to encode
 * @param {Array} encoding -
 * a list of properties determining the order in which the object's values
 * should appear in the encoded array, e.g., ["value", "year", "rank"]
 * @return {Array}
 */
export const encodeObject = (object, encoding) => {
  const array = [];

  // Shallow-copy object
  object = { ...object };

  // Push object values into the array
  encoding.forEach((key) => {
    array.push(get(object, key, null));
    delete object[key];
  });

  // Assert that no properties remain unencoded
  if (Object.keys(object).length != 0)
    throw new Error(
      `Some object properties could not be not encoded. Encoding: ${JSON.stringify(
        encoding
      )}. Object: ${JSON.stringify(object)}`
    );

  // Remove trailing `null` and `undefined`
  while (array.length > 0 && array[array.length - 1] == null) {
    array.pop();
  }

  return array;
};
