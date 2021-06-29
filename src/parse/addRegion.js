/**
 * Add region to the dataStore
 * @param {Object} dataStore - The store where the data are saved
 */

export const addRegion = (dataStore, params = {}) => {
  dataStore.regions.push({
    ...params,
    type: "country",
  });
};
