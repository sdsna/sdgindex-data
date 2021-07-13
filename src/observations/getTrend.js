import { TREND_KEY } from "./config";

/**
 * Get the trend (e.g., "↑", "➚", etc...) for the given observation.
 * @param {Object} observation
 * @return {String}
 */

export const getTrend = (observation) => observation[TREND_KEY];
