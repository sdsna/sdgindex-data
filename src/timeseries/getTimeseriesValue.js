import { START_YEAR } from "./TimeseriesLength";

/**
 * Get the time series value for a specific assessment and year.
 * @param {Object} timeseries
 * @param {Number} year
 * @returns {Number} Returns the time series value for a specific assessment and year
 */

export const getTimeseriesValue = (timeseries, year) =>
  timeseries.v[year - START_YEAR];
