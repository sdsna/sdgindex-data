import { DATA_PATH, getDataDir } from "./config";
import { store } from "./store";
/**
 * Load a single dataset into the store.
 * @private
 * @param {Object} dataset - The dataset to load
 * @param {string} [context] - The context for data storage (e.g., 'benin' for Benin-specific data)
 * @return {Promise} a promise that resolves when the dataset has been loaded
 */
export const loadDataset = (dataset, context) => {
  // If dataset is loaded (or loading), return existing data (or promise)
  if (store[dataset] !== undefined) return Promise.resolve(store[dataset]);

  // Load data via readJson (server) or fetch (browser), depending on environment
  if (typeof window === "undefined" || typeof fetch === "undefined") {
    // Server
    const path = require("path");
    const fse = require("fs-extra");
    const dataDir = getDataDir(context);
    const datasetPath = path.resolve(dataDir, `${dataset}.json`);
    store[dataset] = fse.readJson(datasetPath);
  } else {
    const subdirectory = context ? `${context}/` : "";
    // Browser
    store[dataset] = fetch(`${DATA_PATH}${subdirectory}${dataset}.json`).then(
      (res) => res.json()
    );
  }

  // When loading is done, replace promise with actual data
  store[dataset].then((data) => {
    Object.assign(store, data);
    return store[dataset];
  });

  return store[dataset];
};
