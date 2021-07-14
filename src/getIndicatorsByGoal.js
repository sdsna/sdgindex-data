import { getIndicators } from "./getIndicators";

/**
 * Get all indicators for the given goal from the store.
 * @param {Object} goal - The goal for which to load the indicators
 * @return {Array} return an array of indicators
 */
export const getIndicatorsByGoal = (goal) =>
  getIndicators().filter((indicator) => indicator.goalNumber === goal.number);
