import { findIndicatorBySlug } from "./findIndicatorBySlug";
import { findIndicatorForRegionById } from "./findIndicatorForRegionById";

/**
 * Find a specific indicator by slug and include the observation for the given
 * region.
 * @param {Object} region - The region for which to load the observation
 * @param {string} indicatorSlug - The slug for which to find the indicator
 * @return {Object} return the indicator, including the observation for the
 *                  given region
 */
export const findIndicatorForRegionBySlug = (region, indicatorSlug) => {
  const indicator = findIndicatorBySlug(indicatorSlug);

  return findIndicatorForRegionById(region, indicator.id);
};
