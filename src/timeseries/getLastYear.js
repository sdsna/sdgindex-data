import { getFirstYear } from "./getFirstYear";

/**
 * Get the last year where the timeseries has a non-null value.
 * @param {Object} timeseries
 * @returns {?number}
 */
export const getLastYear = ({ timeseries }) => {
  if (timeseries == null) return null;

  // We slice the first two elements because those are start year + start value
  return getFirstYear({ timeseries }) + timeseries.slice(2).length;
};
