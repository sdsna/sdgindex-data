import { findAssessmentById } from "./findAssessmentById";
import { findObservationByRegionAndAssessment } from "./findObservationByRegionAndAssessment";

/**
 * Find a specific assessment by ID and include the observation for the given
 * region.
 * @param {Object} region - The region for which to load the observation
 * @param {string} assessmentId - The ID for which to find the assessment
 * @return {Object} return the assessment, including the observation for the
 *                  given region
 */
export const findAssessmentForRegionById = (region, assessmentId) => {
  const assessment = findAssessmentById(assessmentId);

  return {
    ...findObservationByRegionAndAssessment(region, assessment),
    ...assessment,
  };
};
