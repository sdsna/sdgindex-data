import get from "lodash.get";
import { TREND_KEY } from "./config";

/**
 * Get the trend (e.g., "↑", "➚", etc...) for the given observation.
 * @param {Object} observation
 * @return {?string}
 */
export const getTrend = (observation) => get(observation, TREND_KEY, null);
