import { findTimeseriesByRegionAndAssessment } from "./findTimeseriesByRegionAndAssessment";

/**
 * Find the timeseries for a specific region and indicator.
 * @param {Object} region
 * @param {Object} indicator
 * @return {Object} return the timeseries
 */
export const findTimeseriesByRegionAndIndicator = (region, indicator) =>
  findTimeseriesByRegionAndAssessment(region, indicator);
