/**
 * find a State by region
 * @param {store} dataStore - The store where the data are loaded
 * @param {String} id - The UNIQUE id associate to the region
 * @return {String} return a String with the state of the Region null if no state
 */
export const findStateByRegionId = (dataStore, id) =>
  dataStore.regions.find((region) => region.id === id)?.state;
