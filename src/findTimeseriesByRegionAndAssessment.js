import { ensureDataIds } from "./ensureDataIds";

/**
 * Find the timeseries for a specific region and assessment.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} region
 * @param {Object} assessment
 * @return {Object} return the timeseries
 */
export const findTimeseriesByRegionAndAssessment = (
  dataStore,
  region,
  assessment
) => {
  ensureDataIds({ dataStore, region, assessment });
  return dataStore.timeseries.find(
    (series) => series.id === `${region.dataId}-${assessment.dataId}`
  );
};
