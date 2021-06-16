import { findAssessmentForRegionById } from "./findAssessmentForRegionById";

/**
 * Find a specific indicator by ID and include the observation for the given
 * region.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} region - The region for which to load the observation
 * @param {string} indicatorId - The ID for which to find the indicator
 * @return {Object} return the indicator, including the observation for the
 *                  given region
 */
export const findIndicatorForRegionById = (dataStore, region, indicatorId) =>
  findAssessmentForRegionById(dataStore, region, indicatorId);
