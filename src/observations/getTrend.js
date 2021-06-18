/**
 * Get the trend for a given observation (On track or maintaining SDG achievement,
 * Moderately improving, etc ...)
 * @param {Object} observation
 * @return {String} Returns arrows as a string (e.g. "↑", "➚", etc ...)
 */

export const getTrend = (observation) => observation.a;
