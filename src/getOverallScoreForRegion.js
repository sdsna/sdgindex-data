/**
 * get Overall score for a given region
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} region - Object of the region {id:..., name:...,  ...}
 * @return {Object} return an object of the overall score for the region {id:..., s:..., ...}
 */
export const getOverallScoreForRegion = (dataStore, region) =>
  dataStore.observations.find(
    (observation) => observation.id == `${region.dataId}-TOT`
  );
