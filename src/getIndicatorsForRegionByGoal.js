import { getIndicatorsByGoal } from "./getIndicatorsByGoal";
import { findObservationByRegionAndAssessment } from "./findObservationByRegionAndAssessment";

/**
 * Get all indicators for the given goal from the store, each including the
 * respective observation for the given region.
 * @param {Object} region - The region for which to load the observations
 * @param {Object} goal - The goal for which to load the indicators
 * @return {Array} return an array of indicators, each including the respective
 *                 observation for the given region
 */
export const getIndicatorsForRegionByGoal = (region, goal) =>
  getIndicatorsByGoal(goal).map((indicator) => ({
    ...findObservationByRegionAndAssessment(region, indicator),
    ...indicator,
  }));
