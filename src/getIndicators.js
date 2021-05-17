import { isIndicator } from "./assessments/isIndicator";
/**
 * get all indicators
 * @param {Object} dataStore - The store where the data are loaded
 * @return {Array} return an array of all indicators [{id:..., name:..., ...}, {}, ...]
 */
export const getIndicators = (dataStore) =>
  dataStore.assessments.filter((assessment) => isIndicator(assessment));
