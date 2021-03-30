const OBSERVATION_ARRAY_ORDER = ["v", "y", "c", "s", "r"];
/**
 * Used by data/getObservations to convert the observation from object type into
 * array, which has a lower file size footprint
 * @param {Object} observation - The observation object  {"id": "43-TOT", "v": 28.62, "r": 43, "c": "red"}
 * @return {array} Return an array of the observation object
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
