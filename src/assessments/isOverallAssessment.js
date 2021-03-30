/**
 * Check if the assessment given is an overall assessment
 * @param {Object} assessment - The object assessment
 * @return {bool} Return true if Overall and false if not
 */
export const isOverallAssessment = (assessment) => assessment.id === "TOT";
