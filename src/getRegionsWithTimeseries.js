import { getRegions } from "./getRegions";
import { findTimeseriesByRegionAndAssessment } from "./findTimeseriesByRegionAndAssessment";

/**
 * Get all regions from the dataStore, each including the respective timeseries
 * values for the given assessment.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} assessment - the assessment for which to load the timeseries
 * @return {Array} return an array of regions, each including the timeseries
 *                 values for the given assessment
 */
export const getRegionsWithTimeseries = (dataStore, assessment) =>
  getRegions(dataStore).map((region) => ({
    ...findTimeseriesByRegionAndAssessment(dataStore, region, assessment),
    ...region,
  }));
