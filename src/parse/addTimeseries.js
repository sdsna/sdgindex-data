import { END_YEAR, START_YEAR } from "../timeseries/config";

/**
 * Add timeseries to the dataStore
 * @param {Object} dataStore - The store where the data are saved
 */
export const addTimeseries = (dataStore, { region, assessment, values }) => {
  dataStore.timeseries.push({
    id: `${region.dataId}-${assessment.dataId}`,
    v: Array.from({ length: END_YEAR - START_YEAR + 1 }).map((_, index) => {
      const value = values.find((row) => row.year === START_YEAR + index).value;
      if (value == null) {
        return null;
      } else {
        return value;
      }
    }),
  });
};
