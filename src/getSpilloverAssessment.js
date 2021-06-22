import { isSpilloverAssessment } from "./assessments/isSpilloverAssessment";

/**
 * Get the spillover index assessment.
 * @param {Object} dataStore - The store where the data are loaded
 * @return {Object}
 */
export const getSpilloverAssessment = (dataStore) =>
  dataStore.assessments.find((assessment) => isSpilloverAssessment(assessment));
