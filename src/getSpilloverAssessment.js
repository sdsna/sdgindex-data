import { isSpilloverAssessment } from "../assessments/isSpilloverAssessment";

/**
 * Get all spillover indicators from the dataStore.
 * @param {Object} dataStore - The store where the data are loaded
 * @return {Array} Returns an array of spillover indicators
 */

export const getSpilloverAssessment = (dataStore) =>
  dataStore.assessments.find((assessment) => isSpilloverAssessment(assessment));
