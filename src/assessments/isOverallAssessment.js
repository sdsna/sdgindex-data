/**
 * Check if the given assessment is the overall SDG Index performance.
 * @param {Object} assessment
 * @return {bool} Return true if assessment is the overall SDG Index performance
 */
export const isOverallAssessment = (assessment) => assessment.id === "TOT";
