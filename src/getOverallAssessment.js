import { isOverallAssessment } from "./assessments/isOverallAssessment";

/**
 * Get the overall SDG Index assessment.
 * @param {Object} dataStore - The store where the data are loaded
 * @return {Object}
 */
export const getOverallAssessment = (dataStore) =>
  dataStore.assessments.find((assessment) => isOverallAssessment(assessment));
