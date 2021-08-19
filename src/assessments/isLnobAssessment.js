import { LNOB_ASSESSMENT_ID } from "./config";

/**
 * Check if the given assessment is the leave-no-one-behind performance.
 * @param {Object} assessment
 * @return {bool} Return true if assessment is the LNOB performance
 */
export const isLnobAssessment = (assessment) =>
  assessment.id === LNOB_ASSESSMENT_ID;
