import { findTimeseriesByRegionAndAssessment } from "./findTimeseriesByRegionAndAssessment";

/**
 * Get all regions that have timeseries for the given assessment from the dataStore.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} assessment - the assessment for which to load the observation
 * @return {Array} Returns an array of regions, each including timeseries for the given
 *                 assessment
 */

export const getRegionsWithTimeseries = (dataStore, assessment) =>
  dataStore.regions.map((region) => ({
    ...findTimeseriesByRegionAndAssessment(dataStore, region, assessment),
    ...region,
  }));
