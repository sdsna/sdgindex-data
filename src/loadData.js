import { loadDataset } from "./loadDataset";
/**
 * If data not loaded, load dataset in dataStore
 * @param {Object} dataStore - The store where we load the data
 * @param {Array} datasets - The dataset to store default: ["assessments", "regions", "observations"]
 * Can Add timeseries or special cases
 * @return {bool} true if dataStore is loaded
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
