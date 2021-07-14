import { findRegionById } from "./findRegionById";
import { findObservationByRegionAndAssessment } from "./findObservationByRegionAndAssessment";

/**
 * Find a specific region by ID and include the observation for the given
 * assessment.
 * @param {Object} assessment - the assessment for which to load the observation
 * @param {string} regionId - The ID for which to find the region
 * @return {Object} return the region, including the observation for the given
 *                  assessment
 */
export const findRegionWithAssessmentById = (assessment, regionId) => {
  const region = findRegionById(regionId);

  return {
    ...findObservationByRegionAndAssessment(region, assessment),
    ...region,
  };
};
