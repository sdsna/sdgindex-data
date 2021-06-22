/**
 * Check whether the given assessment is a global-only indicator (used only to
 * assess non-OECD countries).
 * @param {Object} assessment
 * @returns {bool} Return true if the assessment is a global-only indicator
 */
export const isGlobalOnly = (assessment) => {
  return assessment.isGlobal === true && assessment.isOECD === false;
};
