import { getValue } from "./getValue";

/**
 * Get the text raw value for a given observation, with the given level of
 * decimal precision. If the raw value is null, the fallback text is returned.
 * @param {Object} observation
 * @param {number} [precision=2] - number of desired decimal digits
 * @param {string} [fallback=Value unavailable] - the string to return if the
 *                                                raw value is undefined or null
 * @return {String}
 */
export const getValueAsText = (
  observation,
  precision = 2,
  fallback = "Value unavailable"
) => {
  const value = getValue(observation);
  if (value != null) return value.toFixed(precision);

  return fallback;
};
