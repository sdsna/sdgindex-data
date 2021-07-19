import { store } from "./store";
import { DATA_DIR, DATA_PATH } from "./config";

/**
 * Load a single dataset into the store.
 * @private
 * @param {Object} dataset - The dataset to load
 * @return {Promise} a promise that resolves when the dataset has been loaded
 */
export const loadDataset = (dataset) => {
  // If dataset is loaded (or loading), return existing data (or promise)
  if (store[dataset] !== undefined) return Promise.resolve(store[dataset]);

  // Load data via readJson (server) or fetch (browser), depending on environment
  if (typeof window === "undefined" || typeof fetch === "undefined") {
    // Server
    const path = require("path");
    const fse = require("fs-extra");
    const datasetPath = path.resolve(DATA_DIR, `${dataset}.json`);
    store[dataset] = fse.readJson(datasetPath);
  } else {
    // Browser
    store[dataset] = fetch(`${DATA_PATH}${dataset}.json`).then((res) =>
      res.json()
    );
  }

  // When loading is done, replace promise with actual data
  store[dataset].then((data) => {
    Object.assign(store, data);
    return store[dataset];
  });

  return store[dataset];
};
