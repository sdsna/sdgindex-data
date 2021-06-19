/**
 * Check if the given assessment has timeseries.
 * @param {Object} timeseries
 * @returns {bool} Returns true if the assessment has timeseries
 */

export const hasTimeseries = (timeseries) =>
  Object.prototype.hasOwnProperty.call(timeseries, "v") &&
  Array.isArray(timeseries.v);
