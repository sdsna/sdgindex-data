import { ensureDataIds } from "./ensureDataIds";
import { getObservationsForAssessment } from "./getObservationsForAssessment";
import { getRegions } from "./getRegions";

/**
 * Get all regions from the store, each including the respective observation
 * for the given assessment. This function returns the same results as
 * getRegionsWithAssessment, but the function executes more quickly. Instead of
 * looping over each region and finding the observation for each region and
 * assessment, this function first finds all observations for the given
 * assessment and then loops over each region only searching for the observation
 * within the limited set of observations already found.
 * @param {Object} assessment - the assessment for which to load the observation
 * @return {Array} return an array of regions, each including the observation
 *                 for the given assessment
 */
export const getRegionsWithAssessmentFast = (assessment) => {
  // Pre-load all observations for the given assessment
  const observations = getObservationsForAssessment(assessment);

  return getRegions().map((region) => {
    ensureDataIds({ region, assessment });

    // Find relevant observation not within the entire store, but within
    // the subset of pre-loaded observations
    return {
      ...observations.find(
        (observation) =>
          observation.id === `${region.dataId}-${assessment.dataId}`
      ),
      ...region,
    };
  });
};
