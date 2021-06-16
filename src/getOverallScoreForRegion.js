// TODO: Deprecate via getOverallAssessmentForRegion

/**
 * Get the overall SDG Index assessment, including the observation for the given
 * region.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} region - The region for which to load the observations
 * @return {Object} return the overall assessment, including the observation for
 *                  the given region
 */
export const getOverallScoreForRegion = (dataStore, region) =>
  dataStore.observations.find(
    (observation) => observation.id == `${region.dataId}-TOT`
  );
