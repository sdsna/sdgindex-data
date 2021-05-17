import { findIndicatorBySlug } from "./findIndicatorBySlug";
import { findAssessmentForRegionById } from "./findAssessmentForRegionById";
/**
 * find a specific indicator for a specific region by slug
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} region - The specific region
 * @param {String} indicatorSlug - The specific indicator slug
 * @return {Object} return an object of the indicator for the region {id:..., name:..., s:..., ...}
 */
export const findIndicatorForRegionBySlug = (
  dataStore,
  region,
  indicatorSlug
) => {
  const assessment = findIndicatorBySlug(dataStore, indicatorSlug);

  return findAssessmentForRegionById(dataStore, region, assessment.id);
};
