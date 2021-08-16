import get from "lodash.get";
import { TRENDS } from "./config";

/**
 * Get the trend (e.g., "↑", "➚", etc...) for the given observation.
 * @param {Object} observation
 * @return {?string}
 */
export const getTrend = (observation) => get(TRENDS, observation.trend, null);
