/**
 * get all regions of a special type
 * @param {store} dataStore - The store where the data are loaded
 * @param {String} type - The type of the region needed
 * @return {Array} return an array of all regions [{id:..., name:..., ...}, {}, ...]
 */
export const getRegionsByType = (dataStore, type) =>
  dataStore.regions.filter((region) => region.type == type);
