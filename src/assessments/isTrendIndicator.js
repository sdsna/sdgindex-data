import { isIndicator } from "./isIndicator";

/**
 * Check whether the given assessment is a trend indicator.
 * @param {Object} assessment
 * @returns {bool} Returns true if the assessment is a trend indicator
 */

export const isTrendIndicator = (assessment) =>
  isIndicator(assessment) && assessment.hasTrend;
