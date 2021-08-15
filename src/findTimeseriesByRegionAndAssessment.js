import { store } from "./store";
import { ensureDataIds } from "./ensureDataIds";

/**
 * Find the timeseries for a specific region and assessment.
 * @param {Object} region
 * @param {Object} assessment
 * @return {?Array} return the timeseries (or null, if none exist)
 */
export const findTimeseriesByRegionAndAssessment = (region, assessment) => {
  ensureDataIds({ region, assessment });
  return store.timeseries[`${region.dataId}-${assessment.dataId}`] || null;
};
