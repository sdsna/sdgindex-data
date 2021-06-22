import { findTimeseriesByRegionAndAssessment } from "./findTimeseriesByRegionAndAssessment";

/**
 * Find the timeseries for a specific region and indicator.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} region
 * @param {Object} indicator
 * @return {Object} return the timeseries
 */
export const findTimeseriesByRegionAndIndicator = (
  dataStore,
  region,
  indicator
) => findTimeseriesByRegionAndAssessment(dataStore, region, indicator);
