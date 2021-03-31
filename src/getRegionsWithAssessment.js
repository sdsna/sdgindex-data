import { getRegions } from "./getRegions";
import { findObservationByRegionAndAssessment } from "./findObservationByRegionAndAssessment";
/**
 * get all indicators for a specific goal
 * @param {store} dataStore - The store where the data are loaded
 * @param {Object} assessment - The specific assessment
 * @return {Array} return an array of all regions for the assessment given [{id:..., name:..., s:..., ...}, {}, ...]
 */
export const getRegionsWithAssessment = (dataStore, assessment) =>
  getRegions(dataStore).map((region) => ({
    ...findObservationByRegionAndAssessment(dataStore, state, assessment),
    ...region,
  }));
