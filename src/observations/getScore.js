import get from "lodash.get";

/**
 * Get the numeric score for the given observation.
 * @param {Object} observation
 */
export const getScore = (observation) => get(observation, "score", null);
