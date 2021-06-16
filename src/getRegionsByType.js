/**
 * Get all regions from the dataStore of a given type.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {String} type - The type of regions to return
 * @return {Array} return an array of regions
 */
export const getRegionsByType = (dataStore, type) =>
  dataStore.regions.filter((region) => region.type == type);
