import { loadDataset } from "./loadDataset";

/**
 * Load the given datasets into the dataStore. If already loaded, no action is
 * taken.
 * @param {Object} dataStore - The store where we load the data
 * @param {Array} [datasets=[assessments, regions, observations]] -
 *    The datasets to load
 * @return {Promise} a promise that resolves when the requested datasets have
 *                   been loaded
 */
export const loadData = (
  dataStore,
  datasets = ["assessments", "regions", "observations"]
) => {
  if (dataStore.state.isLoaded) return;

  return Promise.all(
    datasets.map((dataset) => loadDataset(dataStore, dataset))
  ).then(() => dataStore.state.markAsLoaded());
};
