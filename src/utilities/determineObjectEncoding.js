import countBy from "lodash.countby";
import uniq from "lodash.uniq";

/**
 * Determine object encoding by counting the number of times each property/key
 * appears in the objects. The encoding is then set to start with the property
 * that appears most frequently and to end with the property that appears least
 * frequently.
 */
export const determineObjectEncoding = (objects) => {
  // Get all keys as a flat array
  const allKeys = objects.flatMap((object) => Object.keys(object));

  // Count number of times each property appears
  const keys = uniq(allKeys);
  const counts = countBy(allKeys);

  // return encoding based on the number of times each property appears,
  // starting with the most frequent
  return keys.sort((a, b) => counts[b] - counts[a]);
};
