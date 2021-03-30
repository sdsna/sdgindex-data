/**
 * Check if the assessment given is an indicator
 * @param {Object} assessment - The object assessment
 * @return {bool} Return true if indicator and false if not
 */
export const isIndicator = (assessment) => assessment.type === "indicator";
