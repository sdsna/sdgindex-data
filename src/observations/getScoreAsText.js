import { getScore } from "./getScore";

/**
 * Get the text score for a given observation, with the given level of decimal
 * precision. If the score is null, the fallback text is returned.
 * @param {Object} observation
 * @param {number} [precision=2] - number of desired decimal digits
 * @param {string} [fallback=Not scored] - the string to return if score is
 *                                         undefined or null
 * @return {String}
 */
export const getScoreAsText = (
  observation,
  precision = 2,
  fallback = "Not scored"
) => {
  const score = getScore(observation);

  const multiplier = Math.pow(10, precision);
  if (score != null)
    return (Math.round(score * multiplier) / multiplier).toFixed(precision);
  return fallback;
};
