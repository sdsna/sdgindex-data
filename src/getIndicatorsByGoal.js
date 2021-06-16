import { getIndicators } from "./getIndicators";

/**
 * Get all indicators for the given goal from the dataStore.
 * @param {Object} dataStore - The store where the data are loaded
 * @param {Object} goal - The goal for which to load the indicators
 * @return {Array} return an array of indicators
 */
export const getIndicatorsByGoal = (dataStore, goal) =>
  getIndicators(dataStore).filter(
    (assessment) => assessment.goalNumber === goal.number
  );
