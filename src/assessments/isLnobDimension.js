/**
 * Check if the given assessment is a LNOB dimension.
 * @param {Object} assessment
 * @return {bool} Return true if assessment type is "lnob"
 */
export const isLnobDimension = (assessment) => assessment.type === "lnob";
