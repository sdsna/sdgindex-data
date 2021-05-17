import { getIndicators } from "./getIndicators";
/**
 * get all indicators for a specific goal
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} goal - The goal to get specific indicators
 * @return {Array} return an array of all indicators for the goal given [{id:..., name:..., ...}, {}, ...]
 */
export const getIndicatorsByGoal = (dataStore, goal) =>
  getIndicators(dataStore).filter(
    (assessment) => assessment.goalNumber === goal.number
  );
