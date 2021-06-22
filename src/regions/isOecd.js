/**
 * Check whether the given region is a member of the OECD.
 * @param {Object} region
 * @returns {bool} return true if the region is a member of the OECD
 */
export const isOecd = (region) => region.region === "OECD members";
