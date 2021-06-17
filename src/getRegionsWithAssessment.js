import { getRegions } from "./getRegions";
import { findObservationByRegionAndAssessment } from "./findObservationByRegionAndAssessment";

/**
 * Get all regions from the dataStore, each including the respective observation
 * for the given assessment.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} assessment - the assessment for which to load the observation
 * @return {Array} return an array of regions, each including the observation
 *                 for the given assessment
 */
export const getRegionsWithAssessment = (dataStore, assessment) =>
  getRegions(dataStore).map((region) => ({
    ...findObservationByRegionAndAssessment(dataStore, region, assessment),
    ...region,
  }));
