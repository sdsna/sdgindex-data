/**
 * Check if the given object has timeseries values.
 * @param {Object} timeseries
 * @returns {bool} Return true if the object has timeseries
 */
export const hasTimeseries = ({ timeseries }) =>
  Array.isArray(timeseries) && timeseries.length > 0;
