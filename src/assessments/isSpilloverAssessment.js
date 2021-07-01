import { SPILLOVER_ASSESSMENT_ID } from "./config";

/**
 * Check if the given assessment is the overall spillover index performance.
 * @param {Object} assessment
 * @returns {bool} return true if the assessment is the overall spillover index
 *                 performance
 */
export const isSpilloverAssessment = (assessment) =>
  assessment.id === SPILLOVER_ASSESSMENT_ID;
