import get from "lodash.get";
import { YEAR_KEY } from "./config";

/**
 * Get the numeric year for the given observation.
 * @param {Object} observation
 * @return {number}
 */
export const getYear = (observation) => get(observation, YEAR_KEY, null);
