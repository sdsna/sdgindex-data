import { getIndicators } from "./getIndicators";
import { isTrendIndicator } from "./assessments/isTrendIndicator";

/**
 * Get all the trend indicators from the dataStore.
 * @param {Object} dataStore - The store where the data are loaded
 * @return {Array} Returns an array of trend indicators
 */

export const getTrendIndicators = (dataStore) =>
  getIndicators(dataStore).filter(isTrendIndicator);
