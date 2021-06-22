import { getTimeseriesValue } from "./getTimeseriesValue";
import { START_YEAR, END_YEAR } from "./config";

/**
 * Get the first year where the timeseries has a non-null value.
 * @param {Object} timeseries
 * @returns {Number}
 */
export const getFirstYear = (timeseries) =>
  Array.from({ length: END_YEAR - START_YEAR + 1 })
    .map((_value, index) => index + START_YEAR)
    .find((year) => getTimeseriesValue(timeseries, year) != null);
