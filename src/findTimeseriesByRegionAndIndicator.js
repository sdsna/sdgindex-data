import { findTimeseriesByRegionAndAssessment } from "./findTimeseriesByRegionAndAssessment";

/**
 * Find the timeseries for a specific region and indicator.
 * @param {Object} region
 * @param {Object} indicator
 * @return {?Array} return the timeseries (or null, if none exist)
 */
export const findTimeseriesByRegionAndIndicator = (region, indicator) =>
  findTimeseriesByRegionAndAssessment(region, indicator);
