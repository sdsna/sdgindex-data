/**
 * Check whether the given assessment is an OECD indicator only.
 * @param {Object} assessment
 * @returns {bool} Returns true if the assessment is an OECD indicator only
 */

export const isOecdOnly = (assessment) => {
  return assessment.isGlobal === false && assessment.isOECD === true;
};
