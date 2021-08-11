import get from "lodash.get";

/**
 * Get the trend (e.g., "↑", "➚", etc...) for the given observation.
 * @param {Object} observation
 * @return {?string}
 */
export const getTrend = (observation) => get(observation, "trend", null);
