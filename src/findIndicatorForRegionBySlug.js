import { findIndicatorBySlug } from "./findIndicatorBySlug";
import { findAssessmentForRegionById } from "./findAssessmentForRegionById";

/**
 * Find a specific indicator by slug and include the observation for the given
 * region.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} region - The region for which to load the observation
 * @param {string} indicatorSlug - The slug for which to find the indicator
 * @return {Object} return the indicator, including the observation for the
 *                  given region
 */
export const findIndicatorForRegionBySlug = (
  dataStore,
  region,
  indicatorSlug
) => {
  const assessment = findIndicatorBySlug(dataStore, indicatorSlug);

  return findAssessmentForRegionById(dataStore, region, assessment.id);
};
