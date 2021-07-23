import { getAssessments } from "./getAssessments";
import { isOverallAssessment } from "./assessments/isOverallAssessment";

/**
 * Get the overall SDG Index assessment.
 * @return {Object}
 */
export const getOverallAssessment = () =>
  getAssessments().find(isOverallAssessment);
