import { ensureDataIds } from "./ensureDataIds";
/**
 * find an Observation by region and assessment
 * @param {store} dataStore - The store where the data are loaded
 * @param {Object} region - The region object
 * @param {Object} assessment - The assessment object
 * @return {Object} return an object of the observation {id:..., name:..., ...}
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
