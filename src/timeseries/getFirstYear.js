/**
 * Get the first year where the timeseries has a non-null value.
 * @param {Object} timeseries
 * @returns {?number}
 */
export const getFirstYear = ({ timeseries }) => {
  if (timeseries == null) return null;

  return timeseries[0];
};
