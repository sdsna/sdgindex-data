/**
 * Check whether the given assessment is a spillover assessment.
 * @param {Object} assessment
 * @returns {bool} Returns true if the assessment is a spillover assessment
 */

export const isSpilloverAssessment = (assessment) => assessment.id === "SPI";
