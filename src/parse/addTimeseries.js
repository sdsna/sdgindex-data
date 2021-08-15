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
  // Filter out data points with null/undefined values
  dataPoints = dataPoints.filter((point) => point.value != null);

  // If the values of all data points are null, do not add the timeseries to the
  // store.
  if (dataPoints.length === 0) return null;

  // Identify first and last year
  const firstYear = Math.min(...dataPoints.map((point) => point.year));
  const lastYear = Math.max(...dataPoints.map((point) => point.year));

  // Format timeseries into an array, where the first element is the start year
  // and subsequent elements are values
  const timeseries = [firstYear];
  for (let year = firstYear; year <= lastYear; year++) {
    const dataPoint = dataPoints.find((point) => point.year === year);
    const value = dataPoint ? roundNumber(dataPoint.value, 2) : null;
    timeseries.push(value);
  }

  // Prepare timeseries in store
  if (!store.timeseries) store.timeseries = {};

  // Verify ID does not yet exist
  const id = `${region.dataId}-${assessment.dataId}`;
  if (Object.prototype.hasOwnProperty.call(store.timeseries, id))
    throw new Error(`Timeseries with id ${id} already exists`);

  // Add timeseries
  store.timeseries[id] = timeseries;

  return timeseries;
};
