import { loadDataset } from "./loadDataset";

/**
 * Load the given datasets into the dataStore. If already loaded, no action is
 * taken.
 * @param {Object} dataStore - The store where we load the data
 * @param {Array} [datasets=[timeseries]] - The datasets to load
 * @return {Promise} Returns a promise that resolves when the requested datasets have
 *                   been loaded
 */

export const loadTimeseries = (dataStore, datasets = ["timeseries"]) => {
  if (dataStore.state.isTimeseriesLoaded) return;

  return Promise.all(
    datasets.map((dataset) => loadDataset(dataStore, dataset))
  ).then(() => dataStore.state.markTimeseriesAsLoaded());
};
