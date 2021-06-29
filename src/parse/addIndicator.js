/**
 * Add indicator to the dataStore
 * @param {Object} dataStore - The store where the data are saved
 */

export const addIndicator = (dataStore, params = {}) => {
  dataStore.assessments.push({
    ...params,
    type: "indicator",
  });
};
