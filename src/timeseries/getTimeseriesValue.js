import { START_YEAR } from "./config";

/**
 * Get timeseries value for the given year.
 * @param {Object} timeseries
 * @param {Number} year
 * @returns {Number}
 */
export const getTimeseriesValue = (timeseries, year) =>
  timeseries.v[year - START_YEAR];
