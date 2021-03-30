import { getRank } from "./getRank";
/**
 * return the Rank (param: r) of the observation Object
 * @param {Object} observation - The observation object  {"id": "43-TOT", "s": 28.62, "r": 43, "c": "red"}
 * @param {string} fallback - fallback is the string returned if rank is not defined
 * @return {String} Return rank of the region as string
 */
export const getRankAsText = (observation, fallback = "Not ranked") => {
  const rank = getRank(observation);

  if (rank != null) return rank.toFixed(0);

  return fallback;
};
