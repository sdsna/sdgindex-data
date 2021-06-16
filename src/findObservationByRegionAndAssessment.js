import { ensureDataIds } from "./ensureDataIds";

/**
 * Find the observation for the given region and assessment.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} region
 * @param {Object} assessment
 * @return {Object} return the observation
 */
export const findObservationByRegionAndAssessment = (
  dataStore,
  region,
  assessment
) => {
  ensureDataIds({ dataStore, region, assessment });
  return dataStore.observations.find(
    (observation) => observation.id === `${region.dataId}-${assessment.dataId}`
  );
};
