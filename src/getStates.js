/**
 * get all regions
 * @param {store} dataStore - The store where the data are loaded
 * @return {Array} return an array of all regions [{id:..., name:..., ...}, {}, ...]
 */
export const getRegions = (dataStore) => dataStore.regions;
