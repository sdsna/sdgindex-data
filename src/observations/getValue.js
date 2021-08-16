import get from "lodash.get";

/**
 * Get the numeric, raw value for the given observation.
 * @param {Object} observation
 * @return {number}
 */
export const getValue = (observation) => get(observation, "value", null);
