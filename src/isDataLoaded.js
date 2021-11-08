import isPlainObject from "lodash.isplainobject";
import isArray from "lodash.isarray";
import { store } from "./store";

/**
 * Check if all datasets have already been loaded into the store.
 * @param {Object} [options]
 * @param {boolean} [options.timeseries=false] -
 * whether to also check if timeseries data have been loaded
 * @return {boolean} true if all datasets have already been loaded
 */
export const isDataLoaded = ({ timeseries = false } = {}) => {
  const datasets = ["assessments", "regions", "observations"];

  if (timeseries === true) datasets.push("timeseries");

  return datasets.every(
    (dataset) => isPlainObject(store[dataset]) || isArray(store[dataset])
  );
};
