import { getIndicators } from "./getIndicators";
import { findObservationByRegionAndAssessment } from "./findObservationByRegionAndAssessment";
/**
 * get all indicators for a specific region
 * @param {store} dataStore - The store where the data are loaded
 * @param {Object} region - The specific region
 * @return {Array} return an array of all indicators for the region given [{id:..., name:..., s:..., ...}, {}, ...]
 */
export const getIndicatorsForRegion = (dataStore, region) =>
  getIndicators(dataStore).map((indicator) => ({
    ...findObservationByRegionAndAssessment(dataStore, region, indicator),
    ...indicator,
  }));
