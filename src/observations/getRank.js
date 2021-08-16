import get from "lodash.get";

/**
 * Get the numeric rank for the given observation.
 * @param {Object} observation
 * @return {number}
 */
export const getRank = (observation) => get(observation, "rank", null);
