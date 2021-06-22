/**
 * Check if the given region is a country.
 * @param {Object} region
 * @returns {bool} return true if the given region is a country
 */
export const isCountry = (region) => region.type === "country";
