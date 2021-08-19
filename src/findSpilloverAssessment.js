import { getAssessments } from "./getAssessments";
import { isSpilloverAssessment } from "./assessments/isSpilloverAssessment";

/**
 * Get the spillover index assessment.
 * @return {Object}
 */
export const findSpilloverAssessment = () =>
  getAssessments().find(isSpilloverAssessment);
