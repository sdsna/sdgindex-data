import { findAssessmentById } from "./findAssessmentById";
import { findObservationByRegionAndAssessment } from "./findObservationByRegionAndAssessment";
/**
 * find a specific assessment for a specific region by assessmentId
 * @param {store} dataStore - The store where the data are loaded
 * @param {Object} region - The specific region
 * @param {Id} assessmentId - The specific assessment Id
 * @return {Object} return an object of the assessment for the region {id:..., name:..., s:..., ...}
 */
export const findAssessmentForRegionById = (
  dataStore,
  region,
  assessmentId
) => {
  const assessment = findAssessmentById(dataStore, assessmentId);

  return {
    ...findObservationByRegionAndAssessment(dataStore, region, assessment),
    ...assessment,
  };
};
