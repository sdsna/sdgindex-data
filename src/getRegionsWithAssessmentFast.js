import { getObservationsForAssessment } from "./getObservationsForAssessment";
import { findObservationByRegionAndAssessment } from "./findObservationByRegionAndAssessment";
import { getRegions } from "./getRegions";

/**
 * Get all regions from the dataStore, each including the respective observation
 * for the given assessment.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} assessment - the assessment for which to load the observation
 * @return {Array} Returns an array of regions, each including the observation
 *                 for the given assessment
 */

export const getRegionsWithAssessmentFast = (dataStore, assessment) => {
  const observations = getObservationsForAssessment(dataStore, assessment);

  return getRegions(dataStore).map((region) => ({
    ...findObservationByRegionAndAssessment(
      { observations },
      region,
      assessment
    ),
    ...region,
  }));
};
