import { VALUE_KEY } from "./config";

/**
 * Get the numeric, raw value for the given observation.
 * @param {Object} observation
 * @return {number}
 */
export const getValue = (observation) => observation[VALUE_KEY];
