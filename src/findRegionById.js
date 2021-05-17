/**
 * find a Region by id
 * @param {Object} dataStore - The store where the data are loaded
 * @param {String} id - The UNIQUE id associate to the region
 * @return {Object} return an object of the region {id:..., name:..., ...}
 */
export const findRegionById = (dataStore, id) =>
  dataStore.regions.find((region) => region.id === id);
