import { END_YEAR, START_YEAR } from "../timeseries/config";
import { roundNumber } from "./roundNumber";
import { store } from "../store";

/**
 * Add timeseries to the store. If the values of all data points are null,
 * the series is not added.
 * @param {Object} timeseries
 * @param {Object} timeseries.region -
 * the region to which the timeseries belongs
 * @param {Object} timeseries.assessment -
 * the assessment to which the timeseries belongs
 * @param {Object[]} timeseries.dataPoints - an array of data points
 * @param {number} timeseries.dataPoints[].year - the year of the data point
 * @param {number} timeseries.dataPoints[].value - the value of the data point
 * @return {Object} the timeseries object that was added to the store
 */
export const addTimeseries = ({ region, assessment, dataPoints }) => {
  // Convert dataPoints into a values array
  const values = [];
  for (let year = START_YEAR; year <= END_YEAR; year++) {
    const dataPoint = dataPoints.find((point) => point.year === year);
    const value = dataPoint ? roundNumber(dataPoint.value, 2) : null;
    values.push(value);
  }

  // If the values of all data points are null, do not add the timeseries to the
  // store.
  if (values.every((value) => value == null)) return;

  const timeseries = {
    id: `${region.dataId}-${assessment.dataId}`,
    v: values,
  };

  // Push timeseries into store
  if (!store.timeseries) store.timeseries = [];
  store.timeseries.push(timeseries);

  return timeseries;
};
