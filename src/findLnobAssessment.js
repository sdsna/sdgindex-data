import { getAssessments } from "./getAssessments";
import { isLnobAssessment } from "./assessments/isLnobAssessment";

/**
 * Get the leave-no-one-behind assessment.
 * @return {Object}
 */
export const findLnobAssessment = () => getAssessments().find(isLnobAssessment);
