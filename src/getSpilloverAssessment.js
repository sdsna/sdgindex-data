import { isSpilloverAssessment } from "./assessments/isSpilloverAssessment";

/**
 * Get spillover assessment from the dataStore.
 * @param {Object} dataStore - The store where the data are loaded
 * @return {Object} Returns an object of the spillover assessment
 */

export const getSpilloverAssessment = (dataStore) =>
  dataStore.assessments.find((assessment) => isSpilloverAssessment(assessment));
