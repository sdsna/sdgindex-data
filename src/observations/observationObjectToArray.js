const OBSERVATION_ARRAY_ORDER = ["v", "y", "c", "s", "r"];

/**
 * Convert the given observation from object type into array, which requires
 * less space and is faster to load. The observation properties (score, raw
 * value, rating, year, etc...) are converted into an array.
 * @private
 * @param {Object} observation
 * @return {array}
 */
export const observationObjectToArray = (observation) => {
  const array = [];

  // Push value, rating/color, score, and rank into the array
  OBSERVATION_ARRAY_ORDER.forEach((prop) => {
    array.push(observation[prop]);
  });

  // Remove trailing nulls
  while (array[array.length - 1] == null) {
    array.pop();
  }

  return array;
};
