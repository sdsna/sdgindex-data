import get from "lodash.get";
import { getFirstYear } from "./getFirstYear";

/**
 * Get timeseries value for the given year.
 * @param {Object} timeseries
 * @param {Number} year
 * @returns {Number}
 */
export const getTimeseriesValue = (timeseries, year) =>
  // We slice the first element because that is the start year
  get(timeseries.slice(1), year - getFirstYear(timeseries), null);
