import { getAssessments } from "./getAssessments";
import { isLnobDimension } from "./assessments/isLnobDimension";

/**
 * Get all LNOB assessments from the store.
 * @return {Array} return an array of LNOB dimensions
 */
export const getLnobDimensions = () => getAssessments().filter(isLnobDimension);
