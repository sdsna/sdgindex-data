import { getRegions } from "./getRegions";
import { findTimeseriesByRegionAndAssessment } from "./findTimeseriesByRegionAndAssessment";

/**
 * Get all regions from the store, each including the respective timeseries
 * values for the given assessment.
 * @param {Object} assessment - the assessment for which to load the timeseries
 * @return {Array} return an array of regions, each including the timeseries
 *                 values for the given assessment
 */
export const getRegionsWithTimeseries = (assessment) =>
  getRegions().map((region) => ({
    ...findTimeseriesByRegionAndAssessment(region, assessment),
    ...region,
  }));
