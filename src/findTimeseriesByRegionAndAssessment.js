import { store } from "./store";
import { ensureDataIds } from "./ensureDataIds";

/**
 * Find the timeseries for a specific region and assessment.
 * @param {Object} region
 * @param {Object} assessment
 * @return {Object} return the timeseries
 */
export const findTimeseriesByRegionAndAssessment = (region, assessment) => {
  ensureDataIds({ region, assessment });
  return store.timeseries.find(
    (series) => series.id === `${region.dataId}-${assessment.dataId}`
  );
};
