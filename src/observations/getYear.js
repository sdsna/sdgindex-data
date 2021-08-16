import get from "lodash.get";

/**
 * Get the numeric year for the given observation.
 * @param {Object} observation
 * @return {number}
 */
export const getYear = (observation) => get(observation, "year", null);
