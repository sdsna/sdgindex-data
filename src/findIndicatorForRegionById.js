import { findAssessmentForRegionById } from "./findAssessmentForRegionById";

/**
 * Find a specific indicator by ID and include the observation for the given
 * region.
 * @param {Object} region - The region for which to load the observation
 * @param {string} indicatorId - The ID for which to find the indicator
 * @return {Object} return the indicator, including the observation for the
 *                  given region
 */
export const findIndicatorForRegionById = (region, indicatorId) =>
  findAssessmentForRegionById(region, indicatorId);
