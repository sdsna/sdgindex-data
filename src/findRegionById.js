/**
 * Find a region by its ID.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {String} id
 * @return {Object} return the region
 */
export const findRegionById = (dataStore, id) =>
  dataStore.regions.find((region) => region.id === id);
