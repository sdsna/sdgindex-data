import { isIndicator } from "./assessments/isIndicator";

/**
 * Get all indicators from the dataStore.
 * @param {Object} dataStore - The store where the data are loaded
 * @return {Array} return an array of indicators
 */
export const getIndicators = (dataStore) =>
  dataStore.assessments.filter((assessment) => isIndicator(assessment));
