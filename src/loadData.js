import { loadDataset } from "./loadDataset";

/**
 * Loads data (assessments, regions, observations, ...) into store.
 * @param {Object} [param.timeseries=false] - whether to load timeseries data
 * @return {Promise} a promise that resolves when the datasets have been loaded
 */
export const loadData = ({ timeseries = false } = {}) => {
  const datasets = ["assessments", "regions", "observations"];

  if (timeseries === true) datasets.push("timeseries");

  return Promise.all(datasets.map(loadDataset));
};
