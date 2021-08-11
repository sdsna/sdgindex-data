import get from "lodash.get";
import { RATING_KEY } from "./config";

/**
 * Get the rating for a given observation (green, yellow, orange, etc...).
 * @param {Object} observation
 * @return {String}
 */
export const getRating = (observation) => get(observation, RATING_KEY, null);
