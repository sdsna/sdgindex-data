import { RATING_KEY } from "./config";

/**
 * Get the rating for a given observation (green, yellow, orange, etc...).
 * @param {Object} observation
 * @return {String}
 */
export const getRating = (observation) => observation[RATING_KEY];
