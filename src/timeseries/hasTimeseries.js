/**
 * Check if the given assessment has a time series.
 * @param {Object} timeseries
 * @returns {bool} Returns true if the assessment has time series
 */

export const hasTimeseries = (timeseries) =>
  Object.prototype.hasOwnProperty.call(timeseries, "v") &&
  Array.isArray(timeseries.v);
