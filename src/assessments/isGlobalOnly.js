/**
 * Check whether the given assessment is a Global indicator only.
 * @param {Object} assessment
 * @returns {bool} Returns true if the assessment is a Global indicator only
 */

export const isGlobalOnly = (assessment) => {
  return assessment.isGlobal === true && assessment.isOECD === false;
};
