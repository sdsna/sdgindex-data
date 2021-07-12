import { writeData } from "./writeData";

/**
 * Write the dataStore to a series of human-readable and minified JSON files.
 * These can then be loaded/imported in the data visualization.
 * One JSON file is created for each type of data (assessments, regions,
 * observations, and timeseries).
 * @param {Object} dataStore
 * @param {string} directory - the directory to write the data to
 */
export const writeStoreToJson = (dataStore, directory) => {
  ["assessments", "regions", "observations", "timeseries"].forEach((type) => {
    writeData(directory, type, { [type]: dataStore[type] || [] });
  });
};
