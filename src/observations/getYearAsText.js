import { getYear } from "./getYear";
import { getValue } from "./getValue";

/**
 * Get the text year for a given observation. If year is null, the fallback text
 * is returned.
 * @param {Object} observation
 * @param {string} [fallback=Year unavailable] - the string to return if year is
 *                                               undefined or null
 * @return {String}
 */
export const getYearAsText = (observation, fallback = "Year unavailable") => {
  const year = getYear(observation);
  const value = getValue(observation);

  // TODO: Do we really want to check if value != null rather than year != null
  // We should double check this!
  if (value != null) return year.toFixed(0);

  return fallback;
};
