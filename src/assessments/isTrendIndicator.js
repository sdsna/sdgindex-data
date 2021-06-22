import { isIndicator } from "./isIndicator";

/**
 * Check if the given assessment is a trend indicator.
 * @param {Object} assessment
 * @returns {bool} Return true if the assessment is a trend indicator
 */
export const isTrendIndicator = (assessment) =>
  isIndicator(assessment) && assessment.hasTrend;
