import { store } from "../store";

/**
 * Add an assessment to the store.
 * @private
 * @param {Object} assessment
 * @return {Object} assessment (identical to parameter)
 */
export const addAssessment = (assessment) => {
  if (!store.assessments) store.assessments = [];
  store.assessments.push(assessment);

  return assessment;
};
