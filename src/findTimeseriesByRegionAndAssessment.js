/**
 * Find the timeseries for a specific region and assessment.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} region
 * @param {Object} assessment
 * @return {Array} Returns an array of the timeseries for the specific region and assessment
 */

export const findTimeseriesByRegionAndAssessment = (
  dataStore,
  region,
  assessment
) =>
  dataStore.timeseries.find(
    (series) => series.id === `${region.dataId}-${assessment.dataId}`
  );
