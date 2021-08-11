import get from "lodash.get";
import { RATINGS } from "./config";

/**
 * Get the rating for a given observation (green, yellow, orange, etc...).
 * @param {Object} observation
 * @return {String}
 */
export const getRating = (observation) =>
  get(RATINGS, observation.rating, null);
