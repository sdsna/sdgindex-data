import get from "lodash.get";
import { VALUE_KEY } from "./config";

/**
 * Get the numeric, raw value for the given observation.
 * @param {Object} observation
 * @return {number}
 */
export const getValue = (observation) => get(observation, VALUE_KEY, null);
