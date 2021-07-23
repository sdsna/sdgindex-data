import { getRegions } from "./getRegions";
import { findObservationByRegionAndAssessment } from "./findObservationByRegionAndAssessment";

/**
 * Get all regions from the store, each including the respective observation
 * for the given assessment.
 * @param {Object} assessment - the assessment for which to load the observation
 * @return {Array} return an array of regions, each including the observation
 *                 for the given assessment
 */
export const getRegionsWithAssessment = (assessment) =>
  getRegions().map((region) => ({
    ...findObservationByRegionAndAssessment(region, assessment),
    ...region,
  }));
