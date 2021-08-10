import { store } from "./store";
import { ensureDataIds } from "./ensureDataIds";

/**
 * Find the observation for the given region and assessment.
 * @param {Object} region
 * @param {Object} assessment
 * @return {Object} return the observation
 */
export const findObservationByRegionAndAssessment = (region, assessment) => {
  ensureDataIds({ region, assessment });
  return store.observations[`${region.dataId}-${assessment.dataId}`];
};
