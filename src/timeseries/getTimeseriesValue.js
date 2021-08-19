import get from "lodash.get";
import { getFirstYear } from "./getFirstYear";

/**
 * Get timeseries value for the given year.
 * @param {Object} timeseries
 * @param {Number} year
 * @returns {?number}
 */
export const getTimeseriesValue = ({ timeseries }, year) => {
  if (timeseries == null) return null;

  // We slice the first element because that is the start year
  return get(timeseries.slice(1), year - getFirstYear({ timeseries }), null);
};
