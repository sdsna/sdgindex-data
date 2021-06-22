import findLast from "lodash.findlast";
import { getTimeseriesValue } from "./getTimeseriesValue";
import { START_YEAR, END_YEAR } from "./config";

/**
 * Get the last year where the timeseries has a non-null value.
 * @param {Object} timeseries
 * @returns {Number}
 */
export const getLastYear = (timeseries) =>
  findLast(
    Array.from({ length: END_YEAR - START_YEAR + 1 }).map(
      (_value, index) => index + START_YEAR
    ),
    (year) => getTimeseriesValue(timeseries, year) != null
  );
