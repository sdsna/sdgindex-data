import { getTimeseriesValue } from "./getTimeseriesValue";
import { START_YEAR, END_YEAR } from "./TimeseriesLength";

/**
 * Get the first year where the time series has value for the given assessment.
 * @param {Object} timeseries
 * @returns {Number} Returns the first year where the time series has value for the given assessment
 */

export const getFirstYear = (timeseries) =>
  Array.from({ length: END_YEAR - START_YEAR + 1 })
    .map((_value, index) => index + START_YEAR)
    .find((year) => getTimeseriesValue(timeseries, year) != null);
