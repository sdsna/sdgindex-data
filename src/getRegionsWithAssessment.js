import { getRegions } from "./getRegions";
import { findObservationByRegionAndAssessment } from "./findObservationByRegionAndAssessment";

/**
 * get all regions with assessment for a specific assessment
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} assessment - The specific assessment
 * @return {Array} return an array of all regions for the assessment given [{id:..., name:..., s:..., ...}, {}, ...]
 */
export const getRegionsWithAssessment = (dataStore, assessment) =>
  getRegions(dataStore).map((region) => ({
    ...findObservationByRegionAndAssessment(dataStore, region, assessment),
    ...region,
  }));
