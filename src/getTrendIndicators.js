import { getIndicators } from "./getIndicators";
import { isTrendIndicator } from "./assessments/isTrendIndicator";

/**
 * Get all trend indicators from the dataStore.
 * @param {Object} dataStore - The store where the data are loaded
 * @return {Array} return an array of trend indicators
 */
export const getTrendIndicators = (dataStore) =>
  getIndicators(dataStore).filter(isTrendIndicator);
