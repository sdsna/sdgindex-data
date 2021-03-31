/**
 * get all regions of types: state
 * @param {store} dataStore - The store where the data are loaded
 * @return {Array} return an array of all regions [{id:..., name:..., ...}, {}, ...]
 */
export const getStates = (dataStore) =>
  dataStore.regions.filter((region) => region.type === "state");
