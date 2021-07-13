import { SCORE_KEY } from "./config";

/**
 * Get the numeric score for the given observation.
 * @param {Object} observation
 */
export const getScore = (observation) => observation[SCORE_KEY];
