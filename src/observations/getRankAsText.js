import { getRank } from "./getRank";

/**
 * Get the text rank for a given observation. If rank is null, the fallback text
 * is returned.
 * @param {Object} observation
 * @param {string} [fallback=Not ranked] - the string to return if rank is
 *                                         undefined or null
 * @return {String}
 */
export const getRankAsText = (observation, fallback = "Not ranked") => {
  const rank = getRank(observation);

  if (rank != null) return rank.toFixed(0);

  return fallback;
};
