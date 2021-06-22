/**
 * Check whether the given assessment is an OECD-only indicator (used only to
 * assess OECD countries).
 * @param {Object} assessment
 * @returns {bool} Return true if the assessment is an OECD-only indicator
 */
export const isOecdOnly = (assessment) => {
  return assessment.isGlobal === false && assessment.isOECD === true;
};
