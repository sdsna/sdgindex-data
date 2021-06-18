import { findLast } from "lodash";
import { getTimeseriesValue } from "./getTimeseriesValue";
import { START_YEAR, END_YEAR } from "./TimeseriesLength";

/**
 * Get the last year where the time series has value for the given assessment.
 * @param {Object} timeseries
 * @returns {Number} Returns the last year where the time series has value for the given assessment
 */

export const getLastYear = (timeseries) =>
  findLast(
    Array.from({ length: END_YEAR - START_YEAR + 1 }).map(
      (_value, index) => index + START_YEAR
    ),
    (year) => getTimeseriesValue(timeseries, year) != null
  );
