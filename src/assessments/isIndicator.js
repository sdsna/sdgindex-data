/**
 * Check if the given assessment is an indicator.
 * @param {Object} assessment
 * @return {bool} Return true if assessment type is "indicator"
 */
export const isIndicator = (assessment) => assessment.type === "indicator";
