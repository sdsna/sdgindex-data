import { isGoal } from "./assessments/isGoal";

/**
 * Get all goal assessments from the dataStore.
 * @param {Object} dataStore - The store where the data are loaded
 * @return {Array} return an array of goals
 */
export const getGoals = (dataStore) =>
  dataStore.assessments.filter((assessment) => isGoal(assessment));
