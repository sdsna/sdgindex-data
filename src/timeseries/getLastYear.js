import { getFirstYear } from "./getFirstYear";

/**
 * Get the last year where the timeseries has a non-null value.
 * @param {Object} timeseries
 * @returns {Number}
 */
export const getLastYear = (timeseries) =>
  // We slice the first two elements because those are start year + start value
  getFirstYear(timeseries) + timeseries.slice(2).length;
