import { getIndicators } from "./getIndicators";
import { findObservationByRegionAndAssessment } from "./findObservationByRegionAndAssessment";

/**
 * Get all indicators from the dataStore, each including the respective
 * observation for the given region.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} region - The region for which to load the observations
 * @return {Array} return an array of indicators, each including the respective
 *                 observation for the given region
 */
export const getIndicatorsForRegion = (dataStore, region) =>
  getIndicators(dataStore).map((indicator) => ({
    ...findObservationByRegionAndAssessment(dataStore, region, indicator),
    ...indicator,
  }));
