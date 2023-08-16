import { getIndicatorsByLnobDimension } from "./getIndicatorsByLnobDimension";
import { findObservationByRegionAndAssessment } from "./findObservationByRegionAndAssessment";

/**
 * Get all indicators for the given lnob dimension from the store, each including the
 * respective observation for the given region.
 * @param {Object} region - The region for which to load the observations
 * @param {Object} dimension - The lnob dimension for which to load the indicators
 * @return {Array} return an array of indicators, each including the respective
 *                 observation for the given region
 */
export const getIndicatorsForRegionByLnobDimension = (region, dimension) =>
  getIndicatorsByLnobDimension(dimension).map((indicator) => ({
    ...findObservationByRegionAndAssessment(region, indicator),
    ...indicator,
  }));
