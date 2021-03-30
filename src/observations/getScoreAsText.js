import { getScore } from "./getScore";
/**
 * return the Score (param: s) of the observation Object
 * @param {Object} observation - The observation object  {"id": "43-TOT", "s": 28.62, "r": 43, "c": "red"}
 * @param {number} decimals - decimals is the number of decimals returned (default == 2)
 * @param {string} fallback - fallback is the string returned if score is not defined (default == "Not scored")
 * @return {String} Return score of the region as string
 */
export const getScoreAsText = (
  observation,
  decimals = 2,
  fallback = "Not scored"
) => {
  const score = getScore(observation);
  if (score != null) return score.toFixed(decimals);

  return fallback;
};
