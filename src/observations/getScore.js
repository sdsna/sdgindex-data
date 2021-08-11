import get from "lodash.get";
import { SCORE_KEY } from "./config";

/**
 * Get the numeric score for the given observation.
 * @param {Object} observation
 */
export const getScore = (observation) => get(observation, SCORE_KEY, null);
