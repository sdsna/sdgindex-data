import { getIndicators } from "./getIndicators";
import { findObservationByRegionAndAssessment } from "./findObservationByRegionAndAssessment";

/**
 * Get all indicators from the store, each including the respective
 * observation for the given region.
 * @param {Object} region - The region for which to load the observations
 * @return {Array} return an array of indicators, each including the respective
 *                 observation for the given region
 */
export const getIndicatorsForRegion = (region) =>
  getIndicators().map((indicator) => ({
    ...findObservationByRegionAndAssessment(region, indicator),
    ...indicator,
  }));
