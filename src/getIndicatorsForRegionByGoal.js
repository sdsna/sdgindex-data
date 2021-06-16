import { getIndicatorsByGoal } from "./getIndicatorsByGoal";
import { findObservationByRegionAndAssessment } from "./findObservationByRegionAndAssessment";

/**
 * Get all indicators for the given goal from the dataStore, each including the
 * respective observation for the given region.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} region - The region for which to load the observations
 * @param {Object} goal - The goal for which to load the indicators
 * @return {Array} return an array of indicators, each including the respective
 *                 observation for the given region
 */
export const getIndicatorsForRegionByGoal = (dataStore, region, goal) =>
  getIndicatorsByGoal(dataStore, goal).map((indicator) => ({
    ...findObservationByRegionAndAssessment(dataStore, region, indicator),
    ...indicator,
  }));
