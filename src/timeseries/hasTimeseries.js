/**
 * Check if the given object has timeseries values.
 * @param {Object} timeseries
 * @returns {bool} Return true if the object has timeseries
 */
export const hasTimeseries = (timeseries) =>
  Object.prototype.hasOwnProperty.call(timeseries, "v") &&
  Array.isArray(timeseries.v);
