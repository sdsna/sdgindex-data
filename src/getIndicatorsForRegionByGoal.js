import { getIndicatorsByGoal } from "./getIndicatorsByGoal";
import { findObservationByRegionAndAssessment } from "./findObservationByRegionAndAssessment";
/**
 * get all indicators for a specific region and a specific goal
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} region - The specific region
 * @param {Object} goal - The specific goal
 * @return {Array} return an array of all indicators for the region and goal given [{id:..., name:..., s:..., ...}, {}, ...]
 */
export const getIndicatorsForRegionByGoal = (dataStore, region, goal) =>
  getIndicatorsByGoal(dataStore, goal).map((indicator) => ({
    ...findObservationByRegionAndAssessment(dataStore, region, indicator),
    ...indicator,
  }));
