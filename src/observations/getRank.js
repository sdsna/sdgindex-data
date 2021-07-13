import { RANK_KEY } from "./config";

/**
 * Get the numeric rank for the given observation.
 * @param {Object} observation
 * @return {number}
 */
export const getRank = (observation) => observation[RANK_KEY];
