import { getAssessments } from "./getAssessments";
import { isIndicator } from "./assessments/isIndicator";

/**
 * Get all indicators from the store.
 * @return {Array} return an array of indicators
 */
export const getIndicators = () => getAssessments().filter(isIndicator);
